import { createAuthor, getAuthorData } from '../../service';
import { getAuthors, getAuthor,  hello } from './query';
import { addAuthor } from './mutation';

export const resolvers = {
  Query: {
    hello,
    getAuthors,
    // When I write   getAuthor in here. throw  Error
    // But the method normality wrote alike other methods
    // Error: Query.getAuthor defined in resolvers, but not in schema
    // getAuthor
  },
  Mutation: {
    // When I write   addAuthor in here. throw  Error
    // But the method normality wrote alike other methods
    // Error: Query.getAuthor defined in resolvers, but not in schema
    // addAuthor
  }
};
