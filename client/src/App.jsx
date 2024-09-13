import { useState, useEffect } from 'react';
import Header from './components/Header';
import NewsList from './components/NewsList';
import SearchBar from './components/SearchBar';
import Pagination from './components/Pagination';

function App() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('general');

  const ARTICLES_ON_ONE_PAGE = 12;

  const fetchNews = async () => {
    setLoading(true);
    try {
      const url = searchQuery
        ? `/api/news/search?q=${searchQuery}&page=${currentPage}&pageSize=${ARTICLES_ON_ONE_PAGE}`
        : `/api/news/${category}?page=${currentPage}&pageSize=${ARTICLES_ON_ONE_PAGE}`;

      const fullUrl = `http://localhost:5000${url}`
      const response = await fetch(fullUrl);
      const data = await response.json();

      console.log(fullUrl);
      console.log(data);

      setNews(data.articles);
      setTotalPages(Math.ceil(data.totalArticles / ARTICLES_ON_ONE_PAGE));
    } catch (error) {
      console.error('Error fetching news:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchNews();
  }, [currentPage, searchQuery]);

  useEffect(() => {
    fetchNews();
  }, [category]);

  const handleCategory = (category) => {
    setCurrentPage(1);
    setSearchQuery('');
    setCategory(category);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCurrentPage(1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header setCategory={handleCategory} />
      <main className="container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : (
          <>
            <NewsList news={news} />
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </>
        )}
      </main>
    </div>
  );
}

export default App;
