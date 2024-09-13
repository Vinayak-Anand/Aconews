import React from 'react';
import NewsItem from './NewsItem';

function NewsList({ news }) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsItem key={item.url} article={item} />
      ))}
    </div>
  );
}

export default NewsList;