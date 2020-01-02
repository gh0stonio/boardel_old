import * as moment from 'moment'

declare global {
  type Task = {
    id: string
    label: string
    description: string
    isPostpone: boolean
    isDone: boolean
    category: Category
    date: moment.Moment
  }

  enum Category {
    'personal',
    'professional',
  }
}
