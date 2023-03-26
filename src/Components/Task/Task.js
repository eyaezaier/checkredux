import React, { useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { deleteTask, doneTask, editTask } from '../../JS/Actions/Actions'
import './Task.css'

const Task = ({task}) => {
    const dispatch=useDispatch()
    const [show, setShow] = useState(false);
    const [newTask,setNewTask]=useState(task.text)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleEdit =() =>{
    dispatch(editTask(task.id ,newTask))
    handleClose()
  }

  return (
    <div style={{display:'flex',justifyContent:'space-around',marginTop:'30px'}}>
        <span className={task.isDone?'Done':'unDone'}>{task.text}</span>
        <Button onClick={()=>dispatch(doneTask(task.id))
        }>{task.isDone?'unDone':'Done'}</Button>
        <Button onClick={handleShow}>Edit</Button>
        <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
       <Form.Control value={newTask} onChange={(e)=>setNewTask(e.target.value)}></Form.Control>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEdit}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
        <Button variant='danger' onClick={()=>dispatch(deleteTask(task.id))}>Delete</Button>

        
    </div>
  )
}

export default Task