import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';
import assignId from '../utils';

const initialState = [
  {
    id: assignId(),
    title: 'React for Dummies',
    category: 'Coding',
  },
  {
    id: assignId(),
    title: 'Romeo & Juliet',
    category: 'Drama',
  },
  {
    id: assignId(),
    title: 'The Lord of the Rings',
    category: 'Action',
  },
];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return [
        ...state,
        {
          id: assignId(),
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return state.filter(book => book.id !== action.payload);
    default:
      return state;
  }
};

export default bookReducer;
