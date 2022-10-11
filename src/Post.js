import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import InputOption from "./InputOption";
import "./Post.css";

const Posts = React.forwardRef(
  ({ name, description, message, photoUrl }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post_header">
          <Avatar src={photoUrl}>{name[0]}</Avatar>
          <div className="post_info">
            <h2>{name}</h2>
            <p>{description}</p>
          </div>
        </div>

        <div className="post_body">
          <p>{message}</p>
        </div>

        <div className="post_button">
          <InputOption Icon={ThumbUpAltOutlined} title="like" />
          <InputOption Icon={ChatOutlined} title="Comment" />
          <InputOption Icon={ShareOutlined} title="Share" />
          <InputOption Icon={SendOutlined} title="Send" />
        </div>
      </div>
    );
  }
);

export default Posts;
