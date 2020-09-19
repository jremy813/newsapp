import React, { useEffect, useState } from "react";
import "./NewsFeed.scss";

function NewsFeed({ searchData, categoryData }) {
  console.log(categoryData);
  return (
    <>
      <div className="newsFeed">
        {!categoryData && !searchData ? <h1>No data</h1> : null}
        {
          (categoryData
            ? categoryData.map((info) => (
                <div className="newsFeed__Card">
                  <h3>{info.title}</h3>
                  <span>{info.source.name}</span>
                  <span>{info.author}</span>
                  <p>{info.description}</p>
                </div>
              ))
            : null,
          searchData
            ? searchData.map((info) => (
                <div className="newsFeed__Card">
                  <h3>{info.title}</h3>
                  <span>{info.source.name}</span>
                  <span>{info.author}</span>
                  <p>{info.description}</p>
                </div>
              ))
            : null)
        }
      </div>
    </>
  );
}

export default NewsFeed;
