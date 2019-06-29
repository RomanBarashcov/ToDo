
export default `
  type Query {
    ListTodos(orderBy: String, ascOrDesc: Boolean, filteredByCompleted: Boolean): [Task]
  }

  type Task {
    id: UUID!
    description: String!
    createdAt: Date!
    completed: Boolean
    priority: Int
  }

  type Mutation {
    createTask(description: String, createdAt:Date!, complete: Boolean, priority: Int): Task!
    updateTask(id: ID!, description: String!, priority:Int!): Task!
    markTaskAsComplete(id: ID!, complete: Boolean!): Task!
    deleteTask(id: ID!): Int!
  }
`;
