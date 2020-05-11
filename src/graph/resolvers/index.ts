import { getAuthors, getAuthor,  hello } from './query';
import { addAuthor  } from './mutation';

export const resolvers = {
  Query: {
    hello,
    getAuthors,
    getAuthor,
    author: async (_source: any, { id }: any, { dataSources }: any) => {
      return dataSources.authorAPI.getOneAuthor(id);
    },
  },
  Mutation: {
    addAuthor
  }
};
