import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import {typeDefs} from './src/schema.js';
import resolvers from './src/mocks/resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const { url } = await startStandaloneServer(server,{
  listen: {
    port: 4444
  }
})

console.log(`Server ready at port 4444`)
