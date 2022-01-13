import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import graphSchema from './graphql/schema';
import graphResolver from './graphql/resolvers';

const app = express();
const PORT = 5000;

app.use(express.json());

app.use('/hello', graphqlHTTP({
  schema: graphSchema,
  rootValue: graphResolver
}));

app.listen(PORT, () => {
  console.log(`Server running on port ${ PORT }`);
});
