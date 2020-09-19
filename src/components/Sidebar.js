import React from "react";
import "./Sidebar.scss";
import Switch from "@material-ui/core/Switch";

function Sidebar({ setCategoryData }) {
  //Requests for each Category

  const getEntertaiment = () => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=03712056389d4d30a0846278a2030a50&category=entertainment"
    )
      .then((res) => res.json())
      .then((data) => setCategoryData(data.articles));
  };

  return (
    <div className="sidebar">
      <div className="sidebar__Top">
        <h1>Name</h1>
        <span>email</span>
      </div>
      <div className="sidebar__Middle">
        <h2>All Categories</h2>
        <span onClick={() => getEntertaiment()}>Entertainment</span>
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
