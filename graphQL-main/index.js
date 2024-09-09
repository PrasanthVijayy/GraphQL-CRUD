// index page setup
import express from 'express';
import dotenv from 'dotenv';
import { createHandler } from 'graphql-http/lib/use/express';
import sequelize from './config/database.js';
import schema from './schema/user.js';
import resolvers from './resolvers/user.js';

dotenv.config();

const app = express();
app.use(express.json());


// GraphQL endpoint
app.use('/graphql', createHandler({
    schema: schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL interface for testing
  
}));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Sync database and start server
sequelize.sync({ force: false }).then(() => {
  app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
  });
});
