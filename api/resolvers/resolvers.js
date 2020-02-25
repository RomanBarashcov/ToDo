const todoRepository = require("../repositories/todo_repository");
const { GraphQLScalarType, Kind } = require('graphql');

const resolvers =  {
    Query: {
        ListTodos: async (parent, {orderBy, ascOrDesc, filteredByCompleted}) => {
          
            return await todoRepository.getTodos(orderBy, ascOrDesc, filteredByCompleted);

        }
    },
    Mutation: {

      CreateTodo: async (parent, { description, complete, priority }) => {

          return await todoRepository.createTodo(description, complete, priority);

      },

      UpdateTodo: async (parent, { id, description, priority }) => { 

          return await todoRepository.updateTodo(id, description, priority);

      },

      MarkTodoComplete: async (parent,{id, complete}) => {

          return await todoRepository.changeCompleteStatus(id, complete);
        
      },

      DeleteTodo: async (parent, {id}) => {

          return await todoRepository.deleteTodo(id);

      },

    },
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      }
    }),
  };

  module.exports = resolvers;