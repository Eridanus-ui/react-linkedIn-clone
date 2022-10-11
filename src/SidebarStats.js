import React from "react";
import "./Sidebar.css";

function SidebarStats() {
  return (
    <div className="sidebar_stats">
      <div className="sidebar_stat">
        <p>Who viewed you?</p>
        <p className="sidebar_statNumber">2,435</p>
      </div>
      <div className="sidebar_stat">
        <p>Views on post</p>
        <p className="sidebar_statNumber">4,325</p>
      </div>
    </div>
  );
}

export default SidebarStats;
