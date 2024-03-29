import * as moment from 'moment'

declare global {
  type Theme = {
    colors: {
      grey: string
      darkGrey: string
      darkestGrey: string
      blue: string
      white: string
      black: string
      red: string
      font: {
        title: string
        content: string
      }
      categories: {
        personal: string
        professional: string
      }
      actions: {
        postpone: string
        done: string
      }
    }
  }

  type Task = {
    id: string
    label: string
    description: string
    isPostpone: boolean
    isDone: boolean
    category: Category
    date: moment.Moment
    isImportant: boolean
    comments: TaskComment[]
  }

  type TaskComment = { id: string; content: string; date: moment.Moment }
}
