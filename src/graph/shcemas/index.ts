import { gql } from 'apollo-server-express';

export const typeDefs = gql(`
  type Query {
    getAuthors: [Author]
    hello: String
  }

  type Mutation {
     createAuthor(id:String!,name:String!): Author!
  }
  
  type Author {
     id:ID!
     name:String!
  }`);
