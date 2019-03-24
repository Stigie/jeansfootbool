import { types, flow, resolveIdentifier } from 'mobx-state-tree'
import Todo, { ITodo, TodoStates } from '../../models/todo'
import DB, { ModelTypes } from '../../database'
import generateId from '../../utils/generate-id'

const TodoStore = types
  .model('TodoStore', {
    items: types.optional(types.array(Todo), []),
  })
  .actions(self => ({
    replaceItems(items: any) {
      self.items.replace(items)
    }
  }))
  .actions(self => ({
    fetchItems() {
      const entries = DB.getModel(ModelTypes.Todo).getArray()

      self.items.replace(entries as ITodo[])
    },
  }))
  .views(self => ({
    getItem(id: ITodo["id"]) {
      return resolveIdentifier(Todo, self, id)
    }
  }))
  .actions(self => ({
    addItem: flow(function*(item: { text: string }) {
      const id = yield generateId()

      const entry = {
        ...item,
        state: TodoStates.DEFAULT,
        id,
      }

      DB.getModel(ModelTypes.Todo).create(entry)
      self.items.push(entry)
    }),
    updateItem(item: ITodo) {
      const result = self.getItem(item.id)

      if (result) {
        DB.getModel(ModelTypes.Todo).update(item)

        result.update(item)
      }
    },
  }))
  .views(self => ({
    get activeItems() {
      return self.items.filter(item => item.state === TodoStates.DEFAULT)
    },
    get completedItems() {
      return self.items.filter(item => item.state === TodoStates.DONE)
    },
    get deletedItems() {
      return self.items.filter(item => item.state === TodoStates.DELETE)
    },
  }))
  .actions(self => ({
    afterCreate() {
      self.fetchItems()
    }
  }))

export default TodoStore
