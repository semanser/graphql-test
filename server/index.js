import express from 'express'
import bodyParser from 'body-parser'
import { graphqlExpress, graphiqlExpress } from 'graphql-server-express'
import { makeExecutableSchema } from 'graphql-tools'

import Schema from './schema'
import Resolvers from './resolvers'

const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  printErrors: true,
  resolvers: Resolvers,
});

const PORT = 3000;
const app = express();

app.use('/graphql', bodyParser.json(), graphqlExpress(
  {
    schema: executableSchema,
  },
))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.listen(PORT, () => console.log('GraphQL server is running!'))
