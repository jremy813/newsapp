import React, { useEffect, useState } from "react";
import "./NewsFeed.scss";

function NewsFeed() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=03712056389d4d30a0846278a2030a50&category=technology"
    )
      .then((res) => res.json())
      .then((data) => setNews(data.articles));
  }, []);
  console.log(news);
  return (
    <div className="newsFeed">
      {news.map((info) => (
        <h1>{info.title}</h1>
      ))}
    </div>
  );
}

export default NewsFeed;
