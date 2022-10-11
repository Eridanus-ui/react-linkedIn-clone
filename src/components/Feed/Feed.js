import {
  CalendarViewDay,
  Create,
  EventNote,
  Image,
  Subscriptions,
} from "@material-ui/icons";
import { useState, React, useEffect } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
import { db } from "../Firebase";
import firebase from "firebase/compat/app";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  // On clicking the Enter key...
  const sendPost = (e) => {
    e.preventDefault();

    // Adding data to the db
    db.collection("posts").add({
      name: user.displayName,
      description: user.email,
      message: input,
      photoUrl: user.photoUrl || "",
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput("");
  };

  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_input">
          <Create />
          <form action="">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="start typing..."
            />
            <button type="submit" onClick={sendPost}>
              Send
            </button>
          </form>
        </div>
        <div className="feed_inputOptions">
          <InputOption Icon={Image} title="photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="video" color="#E7A33E" />
          <InputOption Icon={EventNote} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="write article"
            color="#7FC15E"
          />
        </div>
      </div>

      {/* Posts */}

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
