import React, { createContext, useContext, useReducer, Reducer } from 'react'
import moment from 'moment'

/**
 * ACTION CONST TYPES
 */
export const CHANGE_DATE = 'CHANGE_DATE'

/**
 * TYPES
 */
type State = { selectedDate: moment.Moment; isToday: boolean }
type ChangeDateAction = { type: typeof CHANGE_DATE; payload: { date: moment.Moment } }
type Action = ChangeDateAction
type Actions = { changeDate: (date: moment.Moment) => ChangeDateAction }

/**
 * STATE
 */
const initialState: State = {
  selectedDate: moment(),
  isToday: true,
}

/**
 * REDUCER
 */
const reducer: Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case CHANGE_DATE: {
      return { ...state, selectedDate: action.payload.date, isToday: action.payload.date.isSame(moment(), 'day') }
    }
    default:
      return state
  }
}

/**
 * ACTIONS CREATORS
 */
const actions: Actions = {
  changeDate: date => ({
    type: CHANGE_DATE,
    payload: {
      date,
    },
  }),
}

/**
 * CONTEXT & PROVIDER
 */
export const StoreContext = createContext(null)
export const StoreProvider: React.FC = ({ children }) => (
  <StoreContext.Provider value={useReducer(reducer, initialState)}>{children}</StoreContext.Provider>
)

export const useStore = () => {
  const [state, dispatch]: [State, React.Dispatch<Action>] = useContext(StoreContext)

  return {
    state,
    dispatch,
    actions,
  }
}
