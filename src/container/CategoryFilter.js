import React from 'react';
import PropTypes from 'prop-types';
import { bookCategories } from '../utils';

class CategoryFilter extends React.Component {
  constructor(props) {
    super(props);

    this.state = { category: '' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    event.preventDefault();
    const { name, value } = event.target;
    this.setState(prevState => ({ ...prevState, [name]: value }));

    const { filterBooks } = this.props;
    const { category } = this.state;
    filterBooks(category);
  }

  render() {
    return (
      <>
        <span>Filter:</span>
        <select
          id="category"
          name="category"
          onChange={this.handleChange}
        >
          <option disabled selected hidden>All</option>
          {/* eslint-disable react/no-array-index-key */}
          {bookCategories.map((item, index) => (
            <option value={item} key={index}>{item}</option>
          ))}
        </select>
      </>
    );
  }
}

CategoryFilter.propTypes = {
  filterBooks: PropTypes.func.isRequired,
};

export default CategoryFilter;
