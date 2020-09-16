import React, { useEffect, useState } from "react";
import "./NewsFeed.scss";

function NewsFeed({ searchData }) {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=03712056389d4d30a0846278a2030a50&category=technology"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);

  return (
    <div className="newsFeed">
      {news.map((info) => (
        <div className="newsFeed__Card">
          <h3>{info.title}</h3>
          <span>{info.source.name}</span>
          <span>{info.author}</span>
          <p>{info.description}</p>
        </div>
      ))}
    </div>
  );
}

export default NewsFeed;
