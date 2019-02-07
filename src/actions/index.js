import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL } from '../constants/constant';


export const addReminder = (text, dueDate) => {
    return {
        type: ADD_REMINDER,
        text,
        dueDate
    }
}

export const deleteReminder = (id) =>{
    return {
        type: DELETE_REMINDER,
        id
    }
}

export const deleteAll = () =>{
    return{
        type: DELETE_ALL
    }
}