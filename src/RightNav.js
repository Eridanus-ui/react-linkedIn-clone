import React from "react";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons//Home";
import SupervisorAccIcon from "@material-ui/icons//SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons//BusinessCenter";
import ChatIcon from "@material-ui/icons//Chat";
import NotificationIcon from "@material-ui/icons//Notifications";
import "./Header.css";
import { useDispatch } from "react-redux";
import { logout } from "./features/userSlice";
import { auth } from "./Firebase";

function RightNav() {
  // const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const logOutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className="header_right">
      <HeaderOption Icon={HomeIcon} title="Home" />
      <HeaderOption Icon={SupervisorAccIcon} title="Network" />
      <HeaderOption
        Icon={BusinessCenterIcon}
        title="Jobs"
        className="remove_sm"
      />
      <HeaderOption Icon={ChatIcon} title="Messaging" />
      <HeaderOption Icon={NotificationIcon} title="Notifications" />
      <HeaderOption
        avatar="images/avatar.jpg"
        title="Me"
        className="image_title"
        onClick={logOutOfApp}
      />
    </div>
  );
}

export default RightNav;
