import Model from "../model"

export const TodoSchema = {
  name: 'Todo',
  primaryKey: 'id',
  properties: {
    id: 'string',
    text: 'string',
    state: 'string'
  }
}

export interface ITodoModel {
  id: string,
  text: string,
  state: string,
}

export default class TodoModel extends Model<ITodoModel> {
  constructor() {
    super(TodoSchema)
  }
}