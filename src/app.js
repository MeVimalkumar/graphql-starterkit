const express = require("express");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const compression = require("compression");
const { graphqlHTTP } = require("express-graphql");

const dbConnection = require("./lib/db.connection");
const { NODE_ENV } = require("./data/config");
const graphqlSchema = require("./lib/graphql");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(compression());

app.get("/", (req, res, next) => {
  res.redirect("/graphql");
});

app.use(
  "/graphql",
  graphqlHTTP({
    graphiql: true,
    schema: graphqlSchema,
  })
);

dbConnection
  .then(() => {
    console.info(`Connected to ${NODE_ENV} database`);
  })
  .catch((error) => {
    console.error(`Failed to connect ${NODE_ENV} database`);
    console.error(error);
  });

module.exports = app;
