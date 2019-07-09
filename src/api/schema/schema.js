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
     Mutatuin for create new Todo
    """

    CreateTodo(description: String!, complete: Boolean, priority: Int): String

    """
      Mutatuin for update Todo
    """

    UpdateTodo(id: String!, description: String!, priority: Int!): Boolean

    """
      Mutatuin for set Todo complete status
    """

    MarkTodoComplete(id: String!, complete: Boolean!): Boolean

    """
      Mutatuin for delete Todo by id
    """

    DeleteTodo(id: String!): Boolean
  }
`;

module.exports = typeDefs;