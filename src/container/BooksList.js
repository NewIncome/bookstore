/* eslint-disable react/forbid-prop-types, react/no-unused-state, no-unused-vars */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Book from '../components/Book';
import '../components/book.css';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
    };
  }

  render() {
    const { list } = this.props;

    return (
      <section className="book-list-wrapper">
        <h1>BooksList!!!</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {list && list.map(book => (
            <Book bookObject={book} key={book.id} />
          ))}
        </table>
      </section>
    );
  }
}

const mapStateToProps = ({ list }) => ({ list });

BooksList.propTypes = {
  list: PropTypes.array.isRequired,
};

export default connect(mapStateToProps, {})(BooksList);
