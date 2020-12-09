import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookObject }) {
  return (
    <tr>
      <td>{bookObject.id}</td>
      <td>{bookObject.title}</td>
      <td>{bookObject.category}</td>
    </tr>
  );
}

Book.propTypes = {
  bookObject: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    category: PropTypes.string,
  }).isRequired,
};

export default Book;
