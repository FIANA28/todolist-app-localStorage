import React from 'react';
import useInputState from '../hooks/useInputState';
import ListItem from '@material-ui/core/ListItem';
import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';


function EditTodoForm({id, task, editTodo, toggleEditForm}) {
    const [value, handleChange, reset] = useInputState(task);

 return (
    <ListItem style={{height: '64px'}}>
        <form onSubmit={e => {
            e.preventDefault();
            editTodo(id, value);
            reset();
            toggleEditForm();
        }} style={{ marginLeft: '1rem', width: '70%', display: 'inline-block' }}>
            <ListItemText>
            <TextField 
            margin='normal' 
            value={value}
            onChange={handleChange}
            fullWidth 
            autoFocus
            />
            </ListItemText>
            <ListItemSecondaryAction>
            <Button variant='outlined' size='small' color='primary' type='submit'>Submit</Button>
            </ListItemSecondaryAction>
        </form>
    </ListItem>
 );
}

export default EditTodoForm;