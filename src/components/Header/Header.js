import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import RightNav from "./RightNav";

function Header() {
  return (
    <div className="header">
      <div className="header_left">
        <img src="images/linkedin.png" alt="" />
        {/* material ui search icon */}
        <div className="header_search">
          <SearchIcon />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <RightNav />
    </div>
  );
}

export default Header;
