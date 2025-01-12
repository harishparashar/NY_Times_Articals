import React from "react";
import ArticleList from "../components/ArticleList";

const Home = ({articles}) => {
  return <ArticleList articles={articles} />;
};

export default Home;
