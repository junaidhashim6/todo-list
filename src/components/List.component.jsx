import React from 'react';
import Todo from './Todo.component';

export default function List({todos, setTodos}) {
    return (
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {todos.map(todo =>(
                        <Todo todos={todos} setTodos={setTodos} key={todo.id} text={todo.text} todo={todo}/>
                    ))}
                </ul>
            </div>
        </div>
    )
}
