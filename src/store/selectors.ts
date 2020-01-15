import { State } from './reducers'

/**
 * DATE
 */
export const getSelectedDate = (state: State) => state.date.selectedDate
export const getIsToday = (state: State) => state.date.isToday

/**
 * TASKS
 */
export const getIsLoading = (state: State) => state.tasks.isLoading
export const getAllTasks = (state: State) => state.tasks.list
export const getSelectedDateTasks = (state: State) => state.tasks.list.filter(task => task.date.isSame(state.date.selectedDate, 'day'))
