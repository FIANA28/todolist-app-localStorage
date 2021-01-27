# Getting Started with Create React App

This projet is Todo list made with Hooks
for styling: Material-UI;
  components API: for surface: Paper, AppBar + Toolbar; for layout: Grid; for Data Display: Typography;
responsive with React Native
for key: UUID - universally unique identifier

Structure:
- TodoApp (managing the state)
  - TodoForm
  - TodoList
    - TodoItem; each item haev: id, task, completed;

useEffect - for saving Todos, whenever they change; using LocalStorage

refactoing to the custom Hook