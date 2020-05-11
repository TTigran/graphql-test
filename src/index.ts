import express          from 'express';
import { resolvers }    from './graph/resolvers/index';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import '../env';

const port = process.env.NODE_PORT;
const app = express();
const typeDefs = importSchema('./src/schema/schema.graphql');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

server.applyMiddleware({ app});
app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
