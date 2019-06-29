const taskRepository = require("../repositories/task_repository");

export default {
    Query: {
        ListTodos: async (parent, {orderBy, ascOrDesc, filteredByCompleted}) => {
            
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

      }
    }
  };