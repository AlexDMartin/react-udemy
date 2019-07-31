import React, {useState} from 'react';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [todoList, setTodoList] = useState([]);

    const inputChangedHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {
      setTodoList(todoList.concat(todoName));
    };

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                onChange={inputChangedHandler}
                value={todoName}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <ul>
                {todoList.map(todo => <li key={todo}>{todo}</li>)}
            </ul>
        </React.Fragment>
    );
};


export default Todo;