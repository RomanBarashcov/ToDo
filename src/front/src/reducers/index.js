import { combineReducers } from 'redux';
import todos from './todos_reducer';
//import visibilityFilter from './visibilityFilter'

export default combineReducers({
  todos,
 // visibilityFilter
})