// this is the home page
import React from 'react';
import "./book.css";
import { Link } from 'react-router-dom'; 
import Navbar from '../components/Navbar/Navbar';

const BookshelfPage = ({ bookshelf }) => {
  return (
    <div>
     <Navbar />
     <div className='book-shelf-container'>
      <div className='title'>My Bookshelf</div>
      <Link to="/">
          <button className='page-change-button'>Back to Search</button> {/* Link to bookshelf */}
        </Link>
     </div>
      <div >
        <div className="results-container">
            {bookshelf.map(book => (
            <div key={book.key} className="card">
                <h3 >{book.title}</h3>
                <div className='results-row'>Edition Count: <span style={{ fontStyle: "italic" }}>{book.edition_count}</span></div>
                <div className='results-row'>Author: <span style={{ fontStyle: "italic" }}>{book.author_name ? book.author_name.join(', ') : 'Unknown Author'}</span></div>
                <div className='results-row'>First Published Year: <span style={{ fontStyle: "italic" }}>{book.first_publish_year}</span></div>
            </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default BookshelfPage;
