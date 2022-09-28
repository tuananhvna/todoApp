import React, { useState } from 'react';

function TodoTable({todos, deleteTodo}) {
    
    return (
        <div>
            <table>
                <thead>
                    <tr className="table_header"><td>Date</td><td>Description</td></tr>
                </thead>
                <tbody>
                    {
                        todos.map((todo, index) => <tr key={index}><td>{todo.date}</td><td>{todo.description}</td><td><button onClick={ () => deleteTodo(index)}>Delete</button></td></tr>)
                    }
                </tbody>
            </table>
        </div>  
    );
}

export default TodoTable;