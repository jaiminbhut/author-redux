import { ACTIONS } from '@/constants';

export const addBook = (authorId, book) => ({
  type: ACTIONS.addBook,
  authorId: authorId,
  book: book,
});
