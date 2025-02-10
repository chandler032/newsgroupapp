import React from "react";

const NewsCard = ({ article }) => {
  return (
    <div className="bg-white shadow-md rounded-md p-4 mb-4">
      <h3 className="font-bold text-lg">{article.title}</h3>
      <p className="text-sm text-gray-600">{article.description}</p>
      <a
        href={article.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline mt-2 block"
      >
        Read more
      </a>
    </div>
  );
};

export default NewsCard;
