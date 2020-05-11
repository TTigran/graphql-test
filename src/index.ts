import express          from 'express';
import { resolvers }    from './graph/resolvers/index';
import { ApolloServer } from 'apollo-server-express';
import { importSchema } from 'graphql-import';
import '../env';
import { getAuthor } from './graph/resolvers/query';
import { AuthorAPI } from './rest/AuthorAPI';

const port = process.env.NODE_PORT;
const app = express();
const typeDefs = importSchema('./src/schema/schema.graphql');
app.get('/author/:id', async (req, res) => {
    const data = await getAuthor({},{id: Number(req.params.id)});
    res.send(data);
});
const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            authorAPI: new AuthorAPI()
        };
    },
});

server.applyMiddleware({ app});
app.listen(port, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
);
