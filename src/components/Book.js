import React from 'react';
import PropTypes from 'prop-types';

function Book({ bookObject, deleteBook }) {
  /* eslint-disable no-console */
  return (
    <div id="book">
      <div className="book-info">
        <p className="book-category">{bookObject.category}</p>
        <h3 className="book-title">{bookObject.title}</h3>
        <p className="book-author">Stan Lee</p>
        <div className="info-edit">
          <span>Comments</span>
          <div
            className="removeBtn"
            type="button"
            onClick={() => deleteBook(bookObject.id)}
            aria-hidden="true"
          >
            Remove
          </div>
          <span>Edit</span>
        </div>
      </div>
      <div className="book-percent">
        <div className="percent-circle" />
        <div className="percent-text">
          <p className="percent-num">0%</p>
          <p className="percent-completed">Completed</p>
        </div>
      </div>
      <div className="book-chapters">
        <p className="cur-chapter-h">CURRENT CHAPTER</p>
        <p className="cur-chapter">Chapter 1</p>
        <button className="cur-chapter-btn" type="button">UPDATE PROGRESS</button>
      </div>
    </div>

  // <tbody>
  //   <tr>
  //     <td>{bookObject.id}</td>
  //     <td>{bookObject.title}</td>
  //     <td>{bookObject.category}</td>
  //     <td>
  //       <button
  //         type="button"
  //         onClick={() => deleteBook(bookObject.id)}
  //         style={{ color: 'tomato' }}
  //       >
  //         Delete
  //       </button>
  //     </td>
  //   </tr>
  // </tbody>
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
