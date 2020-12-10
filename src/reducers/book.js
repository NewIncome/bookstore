import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = [
  {
    id: Math.floor(Math.random() * 10),
    title: 'React for Dummies',
    category: 'Coding',
  },
  {
    id: Math.floor(Math.random() * 10),
    title: 'Romeo & Juliet',
    category: 'Drama',
  },
  {
    id: Math.floor(Math.random() * 10),
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
          id: Math.floor(Math.random() * 10),
          title: action.payload.title,
          category: action.payload.category,
        },
      ];
    case REMOVE_BOOK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookReducer;
