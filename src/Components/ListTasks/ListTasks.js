import React from 'react'
import { useSelector } from 'react-redux'
import Task from '../Task/Task'

const ListTasks = () => {
const list =useSelector(state=>state.listReducer.listTasks)
console.log(list)

  return (
    <div>
     {
        list.map(el=>
            <Task task={el} key={el.id} />)
     }
    </div>
  )
}

export default ListTasks