/* eslint-disable react/forbid-prop-types, react/no-unused-state, no-unused-vars */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../components/book.css';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from './CategoryFilter';

function BooksList(props) {
  const {
    list, removeBook, filter, changeFilter,
  } = props;
  const handleRemoveBook = id => id;
  const handleFilterChange = category => changeFilter(category);

  return (
    <section className="book-list-wrapper">
      <CategoryFilter filterBooks={() => handleFilterChange(filter)} />
      <h1>BooksList!!!</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
            <th>{' '}</th>
          </tr>
        </thead>

        {filter && list.filter(book => book.category === filter).map(book => (
          <Book
            deleteBook={() => handleRemoveBook(removeBook(book.id))}
            bookObject={book}
            key={book.id}
          />
        ))}
        {!filter && list.map(book => (
          <Book
            deleteBook={() => handleRemoveBook(removeBook(book.id))}
            bookObject={book}
            key={book.id}
          />
        ))}
      </table>
    </section>
  );
}

const mapStateToProps = ({ list, filter }) => ({ list, filter });
const mapDispatchToProps = dispatch => ({
  removeBook: id => dispatch(removeBook(id)),
  changeFilter: category => dispatch(changeFilter(category)),
});

BooksList.propTypes = {
  list: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
  changeFilter: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
