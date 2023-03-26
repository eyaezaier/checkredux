import { ADD_TASK, DELETE_TASK, DONE_TASK, EDIT_TASK } from '../ActionTypes/ActionTypes'


const initialState ={
    listTasks:[
        {id :Math.random() ,text:'Task1',isDone: false},
        {id :Math.random() ,text:'Task2',isDone: true},
        {id :Math.random() ,text:'Task3',isDone: false}
    ]
}



const listReducer = (state=initialState,{type,payload}) => {
    switch (type) {
        case DONE_TASK :
            return{
                ...state,listTasks:state.listTasks.map((el)=>
                el.id===payload? {...el,isDone:!el.isDone}:el)
            }
        case ADD_TASK:
            return{
                ...state,listTasks:[...state.listTasks,payload]
            }   
        case DELETE_TASK:
            return{
                ...state, listTasks: state.listTasks.filter((el)=>
                el.id!==payload)
            }
        case EDIT_TASK :
            return{
                ...state, listTasks: state.listTasks.map((el)=>
                el.id===payload.id? {...el,text:payload.newTask}:el)
            }
    
        default:
           return state
    }
}

export default listReducer