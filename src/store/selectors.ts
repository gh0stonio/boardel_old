import { State } from './reducers'

/**
 * DATE
 */
export const getSelectedDate = (state: State) => state.date.selectedDate
export const getIsToday = (state: State) => state.date.isToday

/**
 * TASKS
 */
export const getAllTasks = (state: State) => state.tasks.list
