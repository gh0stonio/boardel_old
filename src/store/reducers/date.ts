import moment from 'moment'
import { Reducer } from 'redux'

/**
 * ACTIONS
 */
const CHANGE_DATE = 'CHANGE_DATE'

/**
 * TYPES
 */
export type State = { selectedDate: moment.Moment; isToday: boolean }
type Action = ChangeDateAction
type ChangeDateAction = { type: typeof CHANGE_DATE; payload: { date: moment.Moment } }

/**
 * ACTIONS CREATORS
 */
export const changeDate = (date: moment.Moment) => ({
  type: CHANGE_DATE,
  payload: {
    date,
  },
})

/**
 * REDUCER
 */
const initialState: State = {
  selectedDate: moment(),
  isToday: true,
}
const dateReducer: Reducer<State, Action> = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_DATE: {
      return { ...state, selectedDate: action.payload.date, isToday: action.payload.date.isSame(moment(), 'day') }
    }
    default: {
      return state
    }
  }
}

export default dateReducer
