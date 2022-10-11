import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { login, logout, selectUser } from "./features/userSlice";
import Feed from "./components/Feed/Feed";
import { auth } from "./components/Firebase";
import Header from "./components/Header/Header";
import Login from "./components/Login/Login";
import Sidebar from "./components/SideBar/Sidebar";
import Widgets from "./components/Widgets/Widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.name,
            photoUrl: userAuth.profilePic,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <Header />

      {/* Check if there's a user and render the appropriate page */}
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          {/* Sidebar */}
          <Sidebar />
          {/* Feed */}
          <Feed />
          {/* Widgets */}
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
