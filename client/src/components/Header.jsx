import React from 'react';

const categories = ['general', 'world', 'nation', 'business', 'technology', 'entertainment', 'sports', 'science', 'health'];

function Header({ setCategory }) {
  return (
    <header className="bg-blue-600 text-white py-4">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-4">ACONEWS</h1>
        <nav>
          <ul className="flex flex-wrap">
            {categories.map((category) => (
              <li key={category} className="mr-4 mb-2">
                <button
                  onClick={() => setCategory(category)}
                  className="capitalize hover:underline"
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
