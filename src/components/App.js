import React from 'react';
import '../App.css';
import BooksList from '../container/BooksList';
import BooksForm from '../container/BooksForm';

function App() {
  return (
    <div className="App">
      <nav id="nav">
        <div id="nav-btns">
          <button className="Bookstore-btn nav-btn" type="button">Bookstore CMS</button>
          <button className="Books-btn nav-btn" type="button">BOOKS</button>
          <button className="Categories-btn nav-btn" type="button">CATEGORIES</button>
        </div>
        <div id="nav-icon">
          <div className="user-icon" />
        </div>
      </nav>
      <BooksList />
      <BooksForm />
    </div>
  );
}

export default App;
