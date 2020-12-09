import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookObject }) {
  return (
    <tbody>
      <tr>
        <td>{bookObject.id}</td>
        <td>{bookObject.title}</td>
        <td>{bookObject.category}</td>
      </tr>
    </tbody>
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
