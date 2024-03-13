import * as actiontypes from '../actions/type'
export const todosReducer = (state=[],action)=>{
    switch(action.type){
        case actiontypes.ADDNEW_TODO:
            return [action.payload, ...state]
        case actiontypes.GETALL_TODO:
            return action.payload
        case actiontypes.TOGGLE_TODO:
            return state.map(e=>(e._id === action.payload._id ? {...e,done: !e.done } : e ))
        case actiontypes.UPDATE_TODO:
            return state.map(e=>(e._id === action.payload._id ? {...e,data: action.payload.data} : e ))
        case actiontypes.DELETE_TODO:
            return state.filter(e=>e._id!== action.payload._id )
        default:
            return state;
    }
}