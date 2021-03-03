import React from 'react'
import {TodoList} from '../components/TodoList'
import {useTodoStore} from '../store'

export const VisibleTodoList = () => {
    const {todos,visibilityFilter,setVisibilityFilter,toggleTodo} = useTodoStore()
    console.log('What is your visibilityFilter: ',visibilityFilter);
    console.log("What is your setVisibility: ",setVisibilityFilter(visibilityFilter));
    return <TodoList todos={todos} toggleTodo={toggleTodo}/>
}