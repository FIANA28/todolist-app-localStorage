import React from 'react';
import useTodoState from '../hooks/useTodoState';
import TodoForm from './TodoForm';
import TodoList from './TodoList';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

function TodoApp() {
    const initialTodos = [{ id: 1, task: 'Drive kids to school', completed: false}];
    // const initialTodos = JSON.parse(window.localStorage.getItem('todos') || '[]');
    const{ todos, addTodo, removeTodo, toggleTodo, editTodo } = useTodoState(initialTodos);

// useEffect(() => {
//     window.localStorage.setItem('todos', JSON.stringify(todos));
// }, [todos]);

 return (
    <Paper style={{ 
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
        }}
        elevation={0}>
        <AppBar position="static">
            <Toolbar variant="dense">
                <Typography variant="h6" color="inherit">
                ToDo App
                </Typography>
            </Toolbar>
        </AppBar>
        <Grid container justify='center' style={{marginTop: '1.5rem'}}>
            <Grid item xs={10} md={6} lg={4}>
                <TodoForm addTodo={addTodo} />
                <TodoList 
                todos={todos} 
                removeTodo={removeTodo} 
                toggleTodo={toggleTodo}
                editTodo = {editTodo}
                />
            </Grid>
        </Grid>
    </Paper>
 )
}

export default TodoApp;