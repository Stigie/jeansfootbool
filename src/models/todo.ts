import { types, Instance, applySnapshot } from 'mobx-state-tree'

export enum TodoStates {
  DEFAULT = 'default',
  DONE = 'done',
  DELETE = 'delete',
}

const Todo = types.model('Todo', {
  id: types.identifier,
  text: types.string,
  state: types.optional(
    types.enumeration(Object.values(TodoStates)),
    TodoStates.DEFAULT,
  ),
}).actions(self => ({
  update(newItem: ITodo) {
    applySnapshot(self, newItem)
  }
}))

export interface ITodo extends Instance<typeof Todo> {}
export default Todo
