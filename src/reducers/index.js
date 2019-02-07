import { ADD_REMINDER, DELETE_REMINDER, DELETE_ALL } from '../constants/constant';
import { bake_cookie, read_cookie } from 'sfcookies';

const reminders = (state = read_cookie('reminders') ||[], action = {}) => {
    let reminders = null;
    switch(action.type) {
        case ADD_REMINDER:
        reminders = [...state,
            {
                text:action.text,
                dueDate: action.dueDate,
                id:Math.random()
            }]
        bake_cookie('reminders', reminders)
        return reminders;
        case DELETE_REMINDER:
        reminders = state.filter(reminder=>reminder.id !== action.id);
        bake_cookie('reminders', reminders)
        return reminders;
        case DELETE_ALL:
        bake_cookie('reminders', [])
            return []
      default: return state;
    }
  }
  
  export default reminders;