/* eslint-disable no-unused-vars */
import { CREATE_BOOK, REMOVE_BOOK } from './types';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

export {
  createBook, removeBook,
};
