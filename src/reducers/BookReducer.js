import { ACTIONS } from '@/constants';

const BookReducer = (state = [], action) => {
  switch (action.type) {
    case ACTIONS.addBook:
      const allBooks = [...state];

      if (allBooks.length === 0) {
        const data = {};
        data.authorId = action.authorId;
        data.books = [action.book];
        allBooks.push(data);
      } else {
        const index = allBooks.findIndex(
          (item) => item.authorId === action.authorId,
        );
        if (index > -1) {
          allBooks[index].books.push(action.book);
        } else {
          const data = {};
          data.authorId = action.authorId;
          data.books = [action.book];
          allBooks.push(data);
        }
      }

      return allBooks;
    default:
      return state;
  }
};

export default BookReducer;
