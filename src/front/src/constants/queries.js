
export const ListTodosQuery = `query ListTodos($orderBy: String!, $ascOrDesc: Boolean!, $filteredByCompleted: Boolean!) {
      ListTodos(orderBy: $orderBy, ascOrDesc: $ascOrDesc, filteredByCompleted: $filteredByCompleted) {
        id
        description
        createdAt
        completed
        priority
      }
}`;

export const CreateTaskMutationQuery = `mutation createTask($description: String!, $createdAt: Date!, $complete: Boolean, $priority: Int) {
  createTask(description: $description, createdAt: $createdAt, complete: $complete, priority: $priority) {
    id
  }
}`;

export const UpdateTaskMutationQuery = `mutation updateTask($id: String!, $description: String!, $priority: Int) {
  updateTask(id: $id, description: $description, priority: $priority)
}`;

export const markTaskAsCompleteMutationQuery = `mutation  markTaskAsComplete($id: String!, $complete: Boolean) {
  markTaskAsComplete(id: $id, complete: $complete)
}`;

export const deleteTaskMutationQuery = `mutation  deleteTask($id: String!) {
  markTaskAsComplete(id: $id, complete: $complete)
}`;