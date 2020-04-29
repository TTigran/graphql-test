import express          from 'express';
import { resolvers }    from './graph/resolvers/index';
import { typeDefs }     from './graph/shcemas/index';
//import typeDefs from './graph/shcemas/index.graphql';
import { ApolloServer } from 'apollo-server-express';
import '../env';

const port = process.env.NODE_PORT;
const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

server.applyMiddleware({ app});

app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
