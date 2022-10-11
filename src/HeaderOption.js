import React from "react";
import "./HeaderOptions.css";
import Avatar from "@material-ui/core/Avatar";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <div className="headerOptions" onClick={onClick}>
      {Icon && <Icon className="headerOptions_icon" />}
      {avatar && (
        <Avatar className="headerOptions_icon">{user?.email[0]}</Avatar>
      )}
      <h3 className="headerOptions_title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
