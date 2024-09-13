import React from 'react';

function NewsItem({ article }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={article.image} alt={article.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{article.title}</h2>
        <p className="text-gray-600 mb-4">{article.description}</p>
        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Read more
        </a>
      </div>
    </div>
  );
}

export default NewsItem;