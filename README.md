#ToDoList App
This projet is Todo list made with Hooks
for styling use: Material-UI; for surface: Paper, AppBar + Toolbar; for layout: Grid; for Data Display: Typography;
responsive; 
5 functional components; 
for key use UUID - universally unique identifier

Structure:
- TodoApp (managing the state)
  - TodoForm, TodoEditForm
  - TodoList
    - TodoItem; each item have: id, task, completed;

useEffect - for saving Todos, whenever they change; using LocalStorage

Check it live on: https://todo-react-local-storage.herokuapp.com/
