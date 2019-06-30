const typeDefs = `
  scalar Date

  type Task {
    id: String!
    description: String!
    createdAt: Date!
    completed: Boolean
    priority: Int
  }

  type Query {
    ListTodos(orderBy: String, ascOrDesc: Boolean, filteredByCompleted: Boolean): [Task]
  }

  type Mutation {
    createTask(description: String!, createdAt:Date!, complete: Boolean, priority: Int): Task!
    updateTask(id: String!, description: String!, priority:Int!): Task!
    markTaskAsComplete(id: String!, complete: Boolean!): Task!
    deleteTask(id: String!): Int!
  }
`;

module.exports = typeDefs;