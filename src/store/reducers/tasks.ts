import { Reducer } from 'redux'

/**
 * ACTIONS
 */
const SET_IS_LOADING = 'SET_IS_LOADING'
const SET_TASKS = 'SET_TASKS'
const UPDATE_COMMENTS = 'UPDATE_COMMENTS'

/**
 * TYPES
 */
export type State = { isLoading: boolean; list: Task[] }
type Action = UpdateTaskAction | SetTasksAction | SetIsLoadingAction
type SetIsLoadingAction = { type: typeof SET_IS_LOADING; payload: { isLoading: boolean } }
type SetTasksAction = { type: typeof SET_TASKS; payload: { tasks: Task[] } }
type UpdateTaskAction = { type: typeof UPDATE_COMMENTS; payload: { taskId: string; comments: TaskComment[] } }

/**
 * ACTIONS CREATORS
 */
export const setIsLoading = (isLoading: boolean) => ({
  type: SET_IS_LOADING,
  payload: {
    isLoading,
  },
})
export const setTasks = (tasks: Task[]) => ({
  type: SET_TASKS,
  payload: {
    tasks,
  },
})
export const updateComments = (taskId: string, comments: TaskComment[]) => ({
  type: UPDATE_COMMENTS,
  payload: {
    comments,
    taskId,
  },
})

/**
 * REDUCER
 */
const initialState: State = {
  list: [],
  isLoading: true,
}
const dateReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case SET_IS_LOADING: {
      return { ...state, isLoading: action.payload.isLoading }
    }
    case SET_TASKS: {
      return { ...state, list: action.payload.tasks }
    }
    case UPDATE_COMMENTS:
      const updatedList = state.list.slice()
      const taskIndex = state.list.findIndex(task => task.id === action.payload.taskId)

      if (taskIndex !== -1) updatedList[taskIndex] = { ...updatedList[taskIndex], comments: action.payload.comments }

      return { ...state, list: updatedList }
    default: {
      return state
    }
  }
}

export default dateReducer
