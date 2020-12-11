/* eslint-disable react/no-unused-state, class-methods-use-this, no-unused-vars, no-console */

import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createBook } from '../actions';
import { bookCategories } from '../utils';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));
  }

  handleSubmit(event) {
    event.preventDefault();
    const { createBook } = this.props;
    const { category, title } = this.state;

    if (category && title) {
      createBook({ category, title });

      this.setState({ title: '', category: '' });
    }
  }

  render() {
    const { title, category } = this.state;
    return (
      <>
        <h1>BooksForm!!!</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            placeholder="Enter book title"
            name="title"
            value={title}
            onChange={this.handleChange}
          />
          <select
            name="category"
            onChange={this.handleChange}
          >
            <option disabled selected hidden>Select Category</option>
            {/* eslint-disable react/no-array-index-key */}
            {bookCategories.map((item, index) => (
              <option value={item} key={index}>{item}</option>
            ))}
          </select>
          <button type="submit">Create Book</button>
        </form>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(BooksForm);
