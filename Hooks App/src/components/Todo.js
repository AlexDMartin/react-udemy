import React, {useState, useEffect, useReducer, useRef} from 'react';
import axios from 'axios';
import List from './List';


const Todo = props => {
    const [inputIsValid, setInputIsValid] = useState(false);
    // const [todoName, setTodoName] = useState('');
    const todoInputRef = useRef();
    // const [submittedTodo, setSubmittedTodo] = useState(null)
    // const [todoList, setTodoList] = useState([]);

    const todoListReducer = (state, action) => {
        switch (action.type) {
            case 'ADD':
                return state.concat(action.payload);
            case 'SET':
                return action.payload;
            case 'REMOVE':
                return state.filter((todo) => todo.id !== action.payload);
            default:
                return state;
        }
    };

    const [todoList, dispatch] = useReducer(todoListReducer, []);

    useEffect(() => {
        axios.get('https://test-a66e0.firebaseio.com/todos.json')
            .then(result => {
                console.log('result', result);
                const todoData = result.data;
                const todos = [];
                for (const key in todoData) {
                    todos.push({id: key, name: todoData[key].name})
                }
                dispatch({type: 'SET', payload: todos});
            });
        return () => {
            console.log('Cleanup');
        };
    }, []);

    const mouseMoveHandler = (event) => {
        console.log(event.clientX, event.clientY);
    };

    // useEffect(() => {
    //     document.addEventListener('mousemove', mouseMoveHandler);
    //     return () => {
    //         document.removeEventListener('mouseMove', mouseMoveHandler)
    //     };
    // }, []);

    // useEffect(() => {
    //     if (submittedTodo) {
    //         dispatch({type: 'ADD', payload: submittedTodo});
    //     }
    // }, [submittedTodo]);

    // const inputChangedHandler = (event) => {
    //     setTodoName(event.target.value);
    // };

    const todoAddHandler = () => {
        const todoName = todoInputRef.current.value;

        axios.post('https://test-a66e0.firebaseio.com/todos.json', {name: todoName})
            .then((result) => {
                setTimeout(() => {
                    const todoItem = {id: result.data.name, name: todoName};
                    dispatch({type: 'ADD', payload: todoItem});
                }, 3000);
            })
            .catch((error) => {
                console.log('error', error);
            });
    };

    const todoRemoveHandler = (id) => {
        axios.delete('https://test-a66e0.firebaseio.com/todos/' + id + '.json')
            .then(result => {
                dispatch({type: 'REMOVE', payload: id});
                console.log('result', result);
            })
            .catch((error) => {
                console.log('error', error);
            })
    };

    const inputValidationHandler = (event) => {
        if (event.target.value.trim() === '') {
            setInputIsValid(false);
        } else {
            setInputIsValid(true);
        }
    };

    return (
        <React.Fragment>
            <input
                type="text"
                placeholder="Todo"
                ref={todoInputRef}
                onChange={inputValidationHandler}
                style={{backgroundColor: inputIsValid ? 'transparent' : 'red'}}
            />
            <button type="button" onClick={todoAddHandler}>Add</button>
            <List items={todoList} onClick={todoRemoveHandler}/>
        </React.Fragment>
    );
};


export default Todo;