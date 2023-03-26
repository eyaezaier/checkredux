import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTask } from '../../JS/Actions/Actions'

const Add = () => {
    const dispatch=useDispatch()
    const [text,setText]= useState('')
    const handleAdd=(e)=>{
        if(text){
            dispatch(addTask({id: Math.random(),text ,isDone:false}))
        }
        else{
            alert('cannot add empty task')
        }
    }
  return (
    <div>
        <Form.Control placeholder='enter new Task' onChange={(e)=>setText(e.target.value)}></Form.Control>
        <Button onClick={()=>handleAdd()}>ADD</Button>
    </div>
  )
}

export default Add