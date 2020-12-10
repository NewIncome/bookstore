/* eslint-disable react/forbid-prop-types, react/no-unused-state, no-unused-vars */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../components/book.css';
import { removeBook } from '../actions';

function BooksList(props) {
  const { list, removeBook } = props;
  const handleRemoveBook = id => id;

  return (
    <section className="book-list-wrapper">
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

        {list && list.map(book => (
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

const mapStateToProps = ({ list }) => ({ list });
const mapDispatchToProps = dispatch => ({ removeBook: id => dispatch(removeBook(id)) });

BooksList.propTypes = {
  list: PropTypes.array.isRequired,
  removeBook: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksList);
