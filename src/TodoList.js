import React, { useState } from 'react';
import TodoTable from './TodoTable';

function TodoList() {
    const [todo, setTodo] = useState({description: '', date: ''});
    const [todos, setTodos] = useState([]);

    const inputChanged = event => {
        setTodo({...todo, [event.target.name]: event.target.value});
    }

    const addTodo = event => {
        event.preventDefault();
        setTodos([...todos, todo]);
    }

    const deleteTodo = index => {
        setTodos([...todos.filter((currentTodo, i) => i !== index)])
    }

    return (
        <div>
            <h1>Simple TodoList</h1>
            <form>
                <fieldset>
                    <legend>Add todo</legend>
                    Description: <input name="description" type="text" onChange={inputChanged} value={todo.description} />
                    Date: <input name="date" type="text" onChange={inputChanged} value={todo.date} />
                    <button onClick={addTodo}>Add</button>
                </fieldset>
            </form>
            
            <TodoTable todos={todos} deleteTodo={deleteTodo}/>
        </div>
    );
}

export default TodoList;