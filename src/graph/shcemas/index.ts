import { gql } from 'apollo-server-express';

export const typeDefs = gql(`
  type Query {
    getAuthors: [Author]
    getAuthor(id: Int!): Author
    hello: String
  }

  type Mutation {
     addAuthor(name: String!): Author
  }
  
  type Author {
     id:ID!
     name:String!
  }`);
