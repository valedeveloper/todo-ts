import { type TODO_FILTER } from './const'

export type TodoId = number
export type TodoTitle = string
export interface Todo {
  id: TodoId
  title: string
  isCompleted: boolean
}

export type ListToDo = Todo[]
export type FilterValue = typeof TODO_FILTER[keyof typeof TODO_FILTER]
