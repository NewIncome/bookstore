/* eslint-disable react/no-unused-state */

import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };
  }

  render() {
    const bookCategories = ['Action', 'Biography', 'History', 'Horror', 'Kids', 'Learning', 'Sci-Fi'];
    return (
      <>
        <h1>BooksForm!!!</h1>
        <form>
          <input placeholder="Enter book titile" />
          <select>
            <option disabled selected hidden>Select Category</option>
            {/* eslint-disable react/no-array-index-key */}
            {bookCategories.map((item, index) => (
              <option key={index}>{item}</option>
            ))}
          </select>
          <button type="submit">Create Book</button>
        </form>
      </>
    );
  }
}

export default BooksForm;
