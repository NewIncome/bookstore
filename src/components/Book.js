import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookObject, deleteBook }) {
  /* eslint-disable no-console */
  return (
    <tbody>
      <tr>
        <td>{bookObject.id}</td>
        <td>{bookObject.title}</td>
        <td>{bookObject.category}</td>
        <td>
          <button
            type="button"
            onClick={() => deleteBook(bookObject.id)}
            style={{ color: 'tomato' }}
          >
            Delete
          </button>
        </td>
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
  deleteBook: PropTypes.func.isRequired,
};

export default Book;
