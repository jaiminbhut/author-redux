import { ACTIONS } from '@/constants';

const AuthorReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.addAuthor:
      return [...state, action.author];
    default:
      return state;
  }
};

export default AuthorReducer;
