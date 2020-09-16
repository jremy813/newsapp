import React, { useState } from "react";
import "./Content.scss";
import Search from "./Search";
import NewsFeed from "./NewsFeed";

function Content() {
  const [searchData, setSearchData] = useState([]);

  return (
    <>
      <div className="content">
        <Search setSearchData={setSearchData} />
        <NewsFeed searchData={searchData} />
      </div>
    </>
  );
}

export default Content;
