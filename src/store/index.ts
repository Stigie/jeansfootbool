import { Instance, types } from 'mobx-state-tree'
import TodoStore from './todo-store'


const Store = types.model({
  todoStore: types.optional(TodoStore, {})
})

export default Store

export interface IStore extends Instance<typeof Store> {}
