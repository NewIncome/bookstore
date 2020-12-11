/* eslint-disable no-unused-vars */
import { CREATE_BOOK, REMOVE_BOOK, CHANGE_FILTER } from './types';

const createBook = book => ({
  type: CREATE_BOOK,
  payload: book,
});

const removeBook = id => ({
  type: REMOVE_BOOK,
  payload: id,
});

const changeFilter = category => ({
  type: CHANGE_FILTER,
  payload: category,
});

export {
  createBook, removeBook, changeFilter,
};
