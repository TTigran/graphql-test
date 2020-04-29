import { getAuthors, getAuthor,  hello } from './query';
import { addAuthor  } from './mutation';

export const resolvers = {
  Query: {
    hello,
    getAuthors,
    getAuthor
  },
  Mutation: {
    addAuthor
  }
};
