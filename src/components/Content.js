import React from "react";
import "./Content.scss";
import Search from "./Search";
import NewsFeed from "./NewsFeed";

function Content() {
  return (
    <>
      <div className="content">
        <Search />
        <NewsFeed />
      </div>
    </>
  );
}

export default Content;
