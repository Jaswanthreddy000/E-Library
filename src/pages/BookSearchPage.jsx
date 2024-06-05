import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import './book.css'; // Import CSS file for styling
import Navbar from '../components/Navbar/Navbar';

const BookSearchPage = ({ addToBookshelf }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (query.length > 2) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setResults(data.docs);
        });
    }
  }, [query]);

  const handleSearch = () => {
    // Trigger search when button is clicked
    if (query.length > 2) {
      fetch(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then(response => response.json())
        .then(data => {
          setResults(data.docs);
        });
    }
  };

  return (
    <div>
        <Navbar />
        <div className="book-search-container">
        <h1>Search by Book Name</h1>
        <div className="search-bar">
            <input
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search for books"
            className='search-input'
            />
            <button onClick={handleSearch}>Search</button> {/* Search button */}
            <Link to="/bookshelf">
            <button className='page-change-button'>Go to My Bookshelf</button> {/* Link to bookshelf */}
            </Link>
        </div> 
        <div className="results-container">
            {results.map(book => (
                <div key={book.key} className="card">
                    <h3>{book.title}</h3>
                    <div className='results-row'>Edition Count: <span style={{ fontStyle: "italic" }}>{book.edition_count}</span></div>
                    <div className='results-row'>Author: <span style={{ fontStyle: "italic" }}>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</span></div>
                    <div className='results-row'>First Published Year: <span style={{ fontStyle: "italic" }}>{book.first_publish_year}</span></div>
                    <button onClick={() => addToBookshelf(book)}>Add to Bookshelf</button>
                </div>
            ))}
        </div>
        </div>
    </div>
  );
};

export default BookSearchPage;
