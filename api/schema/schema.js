const typeDefs = `
  scalar Date

  """
    Default schema of data
  """

  type Todo {
    id: String!
    description: String!
    createdAt: Date!
    completed: Boolean
    priority: Int
  }

  type Query {

  """
     Query for geting list of todos with order by column, direction sort and filtering by complete todos
  """

    ListTodos(orderBy: String, ascOrDesc: Boolean, filteredByCompleted: Boolean): [Todo]
  }

  type Mutation {

    """
      Mutation for create new Todo
    """

    CreateTodo(description: String!, complete: Boolean, priority: Int): String

    """
      Mutation for update Todo
    """

    UpdateTodo(id: String!, description: String!, priority: Int!): Boolean

    """
      Mutation for set Todo complete status
    """

    MarkTodoComplete(id: String!, complete: Boolean!): Boolean

    """
      Mutation for delete Todo by id
    """

    DeleteTodo(id: String!): Boolean
  }
`;

module.exports = typeDefs;