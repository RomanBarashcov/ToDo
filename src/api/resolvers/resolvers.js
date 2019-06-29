const taskRepository = require("../repositories/task_repository");

export default {
    Query: {
        ListTodos: async (parent, {orderBy, ascOrDesc, filteredByCompleted}) => {
            console.log("LIST_TODOS___________");
            return await taskRepository.getTasks(orderBy, ascOrDesc, filteredByCompleted);

        }
    },
    Mutation: {
      createTask: async (parent, { description, createdAt, complete, priority }) => {

          await taskRepository.createTask(description, createdAt, complete, priority);

        },
      updateTask: async (parent, { id, description, priority }) => { 

          await taskRepository.updateTask(id, description, priority);

        },
      markTaskAsComplete: async (parent,{id, complete}) => {

        await taskRepository.markTaskAsComplete(id, complete);

      },
      deleteTask: async (parent, {id}) => {

        await taskRepository.deleteTask(id);

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
    }
  };