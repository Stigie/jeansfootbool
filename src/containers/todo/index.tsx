import React from 'react'
import { Component } from 'react'
import { IStoresMap } from '../../types'
import connector from '../../decorators/connector'
import { observer } from 'mobx-react'
import { ITodo, TodoStates } from '../../models/todo'
import TodoItem from '../../components/todo-item'
import { FlatList, FlatListProps } from 'react-native'
import { computed } from 'mobx'

export enum TodoListTypes {
  Active = 'Active',
  Completed = 'Completed',
}

interface ITodoList {
  type: TodoListTypes
  maxLength?: number,
  forwardRef?: React.Ref<FlatList<ITodo>>
}

@observer
class TodoList extends Component<ReturnType<typeof storesToProps> & ITodoList> {
  @computed
  public get items() {
    const { type, maxLength, todoStore } = this.props
    const { activeItems, completedItems } = todoStore

    const items = type === TodoListTypes.Active ? activeItems : completedItems

    return !maxLength ? items : [...items].slice(0, maxLength)
  }

  public onChangeState = (item: ITodo, state: TodoStates) => {
    const { updateItem } = this.props.todoStore

    updateItem({
      ...item,
      state,
    })
  }

  public onEdit = (item: ITodo, text: string) => {
    const { updateItem } = this.props.todoStore

    updateItem({
      ...item,
      text,
    })
  }

  public render() {
    const { forwardRef } = this.props

    return (
      <FlatList
        ref={forwardRef}
        keyExtractor={item => `${item.id}`}
        data={this.items}
        renderItem={({ item }) => (
          <TodoItem
            key={item.id}
            item={item}
            onChangeState={this.onChangeState}
            onEdit={this.onEdit}
          />
        )}
      />
    )
  }
}

const storesToProps = ({ store }: IStoresMap, _nextProps: ITodoList) => ({
  todoStore: store.todoStore,
})

export default connector(storesToProps)(TodoList)
