import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArticlePage from "./pages/ArticlePage";
import { fetchArticles } from "./services/api";
import "./App.css";
import "./styles/global.css";
import Home from "./pages/Home";

const App = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      const data = await fetchArticles();
      setArticles(data);
    };
    getArticles();
  }, []);
  
  return(

    <div>{articles.length ? ( <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Home articles={articles} />} />
          <Route path="/article/:id" element={<ArticlePage articles={articles} />} />
        </Routes>
      </Router>
    </div>) : "Loading..."}</div>
  )

};

export default App;
