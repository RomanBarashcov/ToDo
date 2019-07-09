
export const ListTodosQuery = `query ListTodos($orderBy: String!, $ascOrDesc: Boolean!, $filteredByCompleted: Boolean!) {
      ListTodos(orderBy: $orderBy, ascOrDesc: $ascOrDesc, filteredByCompleted: $filteredByCompleted) {
        id
        description
        createdAt
        completed
        priority
      }
}`;

export const CreateTodoMutation = `mutation CreateTodo($description: String!, $complete: Boolean, $priority: Int) {
  CreateTodo(description: $description, complete: $complete, priority: $priority)
}`;

export const UpdateTodoMutation = `mutation UpdateTodo($id: String!, $description: String!, $priority: Int!) {
  UpdateTodo(id: $id, description: $description, priority: $priority)
}`;

export const MarkTodoCompleteMutation = `mutation MarkTodoComplete($id: String!, $complete: Boolean!) {
  MarkTodoComplete(id: $id, complete: $complete)
}`;

export const DeleteTodoMutation = `mutation DeleteTodo($id: String!) {
  DeleteTodo(id: $id)
}`;