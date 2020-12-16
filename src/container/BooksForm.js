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
        <section id="form-section">
          <h2 className="form-title">ADD NEW BOOK</h2>
          <form className="form" onSubmit={this.handleSubmit}>
            <input
              className="form-book-title"
              placeholder="Book title"
              name="title"
              value={title}
              onChange={this.handleChange}
            />
            <select
              className="form-book-category"
              name="category"
              onChange={this.handleChange}
            >
              <option disabled selected hidden>Select Category</option>
              {bookCategories.map(item => (
                <option value={item} key={item}>{item}</option>
              ))}
            </select>
            <button className="form-btn" type="submit">ADD BOOK</button>
          </form>
        </section>
      </>
    );
  }
}

const mapDispatchToProps = dispatch => ({ createBook: book => dispatch(createBook(book)) });

BooksForm.propTypes = {
  createBook: PropTypes.func.isRequired,
};

export default connect(() => ({}), mapDispatchToProps)(BooksForm);
