import React from "react";
import NewsCard from "./NewsCard";

const NewsList = ({ data }) => {
  console.log({data})
  if (!data || data.length === 0) {
    return <p>No news articles available.</p>;
  }

  return (
    <div className="p-6 space-y-8">
      {Object.entries(data)
        .filter(([key]) => key !== '_links')
        .map(([date, info]) => (
          <div key={date}>
            <div className="flex items-center space-x-2 text-2xl font-bold text-gray-800">
              <span>{new Date(date).toLocaleDateString()}</span>
              <span className="text-sm text-gray-500">({info.count} articles)</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
              {info.articles.map((article, index) => (
                // <Card key={index} className="rounded-2xl shadow-md hover:shadow-lg transition duration-300">
                //   <CardContent className="p-4 space-y-2">
                <div>
                    <a href={article.url} target="_blank" rel="noopener noreferrer">
                      <h2 className="text-xl font-semibold text-blue-600 hover:underline">
                        {article.title}
                      </h2>
                    </a>
                    <p className="text-gray-600 text-sm">{article.description}</p>
                    <p className="text-gray-400 text-xs">Published at: {new Date(article.publishedAt).toLocaleString()}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
    </div>
  );
}

export default NewsList;

