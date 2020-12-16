/* eslint-disable react/forbid-prop-types, react/no-unused-state, no-unused-vars */

import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../components/book.css';
import { removeBook, changeFilter } from '../actions';
import CategoryFilter from '../components/CategoryFilter';

function BooksList(props) {
  const {
    list, removeBook, changeFilter, filter,
  } = props;
  const handleRemoveBook = id => id;
  const handleFilterChange = category => category;

  return (
    <section className="book-list-wrapper">
      <CategoryFilter filterBooks={sorter => handleFilterChange(changeFilter(sorter))} />

      {filter && list.filter(book => book.category === filter).map(book => (
        <Book
          deleteBook={() => handleRemoveBook(removeBook(book.id))}
          bookObject={book}
          key={book.id}
        />
      ))}

      {(!filter || filter === 'All') && list.map(book => (
        <Book
          deleteBook={() => handleRemoveBook(removeBook(book.id))}
          bookObject={book}
          key={book.id}
        />
      ))}
      {/* </table> */}
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
