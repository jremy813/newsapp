import React from "react";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__Top">
        <h1>Name</h1>
        <p>email</p>
      </div>
      <div className="sidebar__bottom">
        <h1>All Categories</h1>
        <span>Entertainment</span>
        <span>Technology</span>
        <span>Business</span>
        <span>Health</span>
        <span>Sports</span>
        <span>Sciences</span>
      </div>
    </div>
  );
}

export default Sidebar;
