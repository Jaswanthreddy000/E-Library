import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookshelfPage from './pages/BookshelfPage';

const App = () => {
    const [bookshelf, setBookshelf] = useState(() => {
        const savedBookshelf = localStorage.getItem('bookshelf');
        return savedBookshelf ? JSON.parse(savedBookshelf) : [];
    });

    const addToBookshelf = (book) => {
        const newBookshelf = [...bookshelf, book];
        setBookshelf(newBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(newBookshelf));
    };

    return (
        <Router>
            <Routes>
                <Route path="/" element={<BookSearchPage addToBookshelf={addToBookshelf} />} />
                <Route path="/bookshelf" element={<BookshelfPage bookshelf={bookshelf} />} />
            </Routes>
        </Router>
    );
};

export default App;
