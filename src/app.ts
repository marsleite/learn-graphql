import { graphqlHTTP } from "express-graphql";

const express = require('express');

const graphqlSchema = require('./graphql/schema');
const graphiqlResolver = require('./graphql/resolvers');
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