import React from "react";
import "./Sidebar.scss";
import Switch from "@material-ui/core/Switch";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__Top">
        <h1>Name</h1>
        <span>email</span>
      </div>
      <div className="sidebar__Middle">
        <h1>All Categories</h1>
        <span>Entertainment</span>
        <span>Technology</span>
        <span>Business</span>
        <span>Health</span>
        <span>Sports</span>
        <span>Sciences</span>
      </div>
      <div className="sidebar__Bottom">
        <Switch />
      </div>
    </div>
  );
}

export default Sidebar;
