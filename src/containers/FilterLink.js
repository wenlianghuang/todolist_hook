import React from 'react'
import {Link} from '../components/Link'
import {useTodoStore} from '../store'

export const FilterLink = ({filter,children}) => {
    const {visibilityFilter,setVisibilityFilter} = useTodoStore();
    console.log("filter: ",filter)
    //console.log(setVisibilityFilter(filter));

    return(
        <Link 
        active={visibilityFilter === filter} 
        onClick={()=>setVisibilityFilter(filter)} 
        children={children}/> 
    )
}