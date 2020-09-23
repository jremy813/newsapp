import React, { useEffect, useState } from "react";
import "./NewsFeed.scss";

function NewsFeed({ searchData, categoryData }) {
  const [headlines, setHeadlines] = useState([]);

  return (
    <>
      <div className="newsFeed">
        {headlines.map((info) => (
          <div className="newsFeed__Card">
            <h3>{info.title}</h3>
            <span>{info.source.name}</span>
            <span>{info.author}</span>
            <p>{info.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default NewsFeed;
