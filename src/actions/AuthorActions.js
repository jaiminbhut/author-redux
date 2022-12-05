import { ACTIONS } from '@/constants';

export const addAuthor = (author) => ({
  type: ACTIONS.addAuthor,
  author: author,
});
