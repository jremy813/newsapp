import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

function App() {
  const [categoryData, setCategoryData] = useState();

  return (
    <div className="app">
      <Sidebar setCategoryData={setCategoryData} />
      <Content categoryData={categoryData} />
    </div>
  );
}

export default App;
