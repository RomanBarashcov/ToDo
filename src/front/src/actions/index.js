import completeToDo from './complete_todo_action';
import createToDo from './create_todo_action';
import deleteToDo from './delete_todo_action';
import loadToDos from './load_todos_action';
import updateToDos from './update_todos_action';

export default Object.assign({},
    {completeToDo},
    {createToDo},
    {deleteToDo},
    {loadToDos},
    {updateToDos}
);