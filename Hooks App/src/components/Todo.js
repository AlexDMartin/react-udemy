import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Todo = props => {
    const [todoName, setTodoName] = useState('');
    const [submittedTodo, setSubmittedTodo] = useState(null)
    const [todoList, setTodoList] = useState([]);

    useEffect(() => {
        axios.get('https://test-a66e0.firebaseio.com/todos.json')
            .then(result => {
                console.log('result', result);
                const todoData = result.data;
                const todos = [];
                for (const key in todoData) {
                    todos.push({id: key, name: todoData[key].name})
                }
                setTodoList(todos);
            });
        return () => {
            console.log('Cleanup');
        };
    }, [todoName]);

    const mouseMoveHandler = (event) => {
        console.log(event.clientX, event.clientY);
    };

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveHandler);
        return () => {
            document.removeEventListener('mouseMove', mouseMoveHandler)
        };
    }, []);

    useEffect(() => {
        if (submittedTodo) {
            setTodoList(todoList.concat(submittedTodo));
        }
    }, [submittedTodo]);

    const inputChangedHandler = (event) => {
        setTodoName(event.target.value);
    };

    const todoAddHandler = () => {

        axios.post('https://test-a66e0.firebaseio.com/todos.json', {name: todoName})
            .then((result) => {
                setTimeout(() => {
                    const todoItem = {id: result.data.name, name: todoName}
                    setTodoList(todoList.concat(todoItem));
                }, 3000);
            })
            .catch((error) => {
                console.log('error', error);
            });
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
                {todoList.map(todo => <li key={todo.id}>{todo.name}</li>)}
            </ul>
        </React.Fragment>
    );
};


export default Todo;