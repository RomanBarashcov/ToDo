var express = require('express');
var typeDefs = require("./schema/schema");
var resolvers = require("./resolvers/resolvers");
var { ApolloServer, gql } = require('apollo-server-express');

const server = new ApolloServer({
    typeDefs: gql(typeDefs),
    resolvers
  });

var app = express();

server.applyMiddleware({ app });

module.exports = app;
