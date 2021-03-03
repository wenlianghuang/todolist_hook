import React from 'react'
import {useTodoStore} from '../store'


export const AddTodo = () => {
    const {todos,addTodo} = useTodoStore();
    console.log('todos: ',todos)
    const inputEl = React.useRef();
    const onSubmit = (e) => {
        e.preventDefault();
        const target = inputEl.current;

        if(!target.value.trim()){
            return;
        }

        addTodo(target.value);
        target.value = ''
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input ref={inputEl}/>
                <button type="submit">Add Todo</button>
            </form>
        </div>
    )
}