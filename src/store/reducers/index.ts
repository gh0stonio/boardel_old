import { combineReducers } from 'redux'

import dateReducer, { State as DateState } from './date'
import tasksReducer, { State as TasksState } from './tasks'

export type State = { date: DateState; tasks: TasksState }

export default combineReducers({ date: dateReducer, tasks: tasksReducer })
