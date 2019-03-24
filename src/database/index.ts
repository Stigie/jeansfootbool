import Realm from 'realm'
import TodoModel, { TodoSchema } from './models/todo'

const databaseOption = {
  path: 'todo.db',
  schema: [TodoSchema],
  deleteRealmIfMigrationNeeded: false
}

const Instance = new Realm(databaseOption)

export enum ModelTypes {
  Todo = 'Todo'
}

const Models = {
  [ModelTypes.Todo]: new TodoModel
}

export default {
  instance: () => Instance,
  getModel: (model: ModelTypes) => Models[model]
}