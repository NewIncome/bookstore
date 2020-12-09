/* eslint-disable react/no-unused-state, class-methods-use-this, no-unused-vars */

import React, { Component } from 'react';

class BooksForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      category: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    // e.preventDefault();
    // const { name, value } = event.target;
    // switch (name) {
    //   case 'title':
    //   case 'category':
    //     this.setState(prevState => ({ ...prevState, [name]: [value] }));
    //     break;
    //   default:
    //     this.setState({ [name]: value });
    // }
  }

  render() {
    const { title, category } = this.state;
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
              <option value={category} key={index}>{item}</option>
            ))}
          </select>
          <button type="submit">Create Book</button>
        </form>
      </>
    );
  }
}

export default BooksForm;
