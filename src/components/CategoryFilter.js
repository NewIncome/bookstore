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
  }

  render() {
    const { filterBooks } = this.props;
    const { category } = this.state;
    if (category) {
      filterBooks(category);
    }

    return (
      <>
        <form>
          <span>Filter:</span>
          <select
            name="category"
            onChange={this.handleChange}
          >
            <option disabled selected hidden>All</option>
            {bookCategories.map(item => (
              <option value={item} key={item}>{item}</option>
            ))}
          </select>
        </form>
      </>
    );
  }
}

CategoryFilter.propTypes = {
  filterBooks: PropTypes.func.isRequired,
};

export default CategoryFilter;
