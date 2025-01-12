import React from "react";
import { useParams } from "react-router-dom";

const ArticleDetails = ({ articles }) => {
    const { id } = useParams();
    const article = articles.find((a) => a.id.toString() === id);

    if (!article) return <p>Article not found</p>;

    return (
        <div>
            <h2>{article.title}</h2>
            <p>{article.abstract}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
                Read More
            </a>
        </div>
    );
};

export default ArticleDetails;
