import { graphqlHTTP } from "express-graphql";

import express from 'express';

import graphqlSchema from './graphql/schema';
import graphiqlResolver from './graphql/resolvers';
const app = express();

const PORT = 5000;

app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema: graphqlSchema,
  rootValue: graphiqlResolver,
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${ PORT }`);
});