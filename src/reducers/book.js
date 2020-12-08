import { CREATE_BOOK, REMOVE_BOOK } from '../actions/types';

const initialState = [{
  id: null,
  title: null,
  category: null,
}];

const bookReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_BOOK:
      return {
        ...state,
        list: action.payload,
      };
    case REMOVE_BOOK:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default bookReducer;
