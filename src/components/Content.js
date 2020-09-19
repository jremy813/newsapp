import React, { useState } from "react";
import "./Content.scss";
import Search from "./Search";
import NewsFeed from "./NewsFeed";

function Content({ categoryData }) {
  const [searchData, setSearchData] = useState([]);

  return (
    <>
      <div className="content">
        <Search setSearchData={setSearchData} />
        <NewsFeed categoryData={categoryData} searchData={searchData} />
      </div>
    </>
  );
}

export default Content;
