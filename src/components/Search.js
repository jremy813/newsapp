import React from "react";
import "./Search.scss";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SearchIcon from "@material-ui/icons/Search";

function Search() {
  return (
    <>
      <div className="search">
        <HomeOutlinedIcon className="search__HomeIcon" />
        <div className="search__Container">
          <SearchIcon />
          <form>
            <input type="search" placeholder="Search for anything here" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Search;
