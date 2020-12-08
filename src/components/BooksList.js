import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import Book from './Book';
import './book.css';
// import { createBook } from '../actions';

class BooksList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      // errors: '',
    };
  }

  render() {
    const { list } = this.state;

    return (
      <section className="book-list-wrapper">
        <h1>BooksList!!!</h1>
        <table>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Category</th>
          </tr>
          {list.map(book => (
            <Book bookObject={book} key={book.id} />
          ))}
        </table>
      </section>
    );
  }
}

const mapStateToProps = (/* state */) => ({
  //
});

export default connect(mapStateToProps, { /* createBook */ })(BooksList);
