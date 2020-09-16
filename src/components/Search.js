import React, { useEffect, useState } from "react";
import "./Search.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";

function Search({ setSearchData }) {
  const [text, setText] = useState("");

  useEffect(() => {
    fetch(
      `http://newsapi.org/v2/everything?q=${text}&apiKey=03712056389d4d30a0846278a2030a50`
    )
      .then((res) => res.json())
      .then((data) => setSearchData(data.articles));
  }, [text]);

  return (
    <>
      <div className="search">
        <HomeOutlinedIcon className="search__HomeIcon" />
        <div className="search__Container">
          <SearchIcon />
          <form>
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              type="search"
              placeholder="Search for anything here"
            />
            <button type="submit"></button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
