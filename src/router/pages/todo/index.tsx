import React from 'react'
import { Component } from 'react'
import { FlatList } from 'react-native'
import { NavigationInjectedProps } from 'react-navigation'
import {
  Container,
  Header,
  Body,
  Footer,
  Input,
  AddButton,
  AddButtonText,
  InputField,
  Filter,
  FilterControl,
  FilterControlText,
  FilterContainer,
  BackButtonText,
  BackButton,
} from './styles'
import connector from '../../../decorators/connector'
import { IStoresMap } from '../../../types'
import { observer } from 'mobx-react'
import { observable, reaction } from 'mobx'
import { ITodo } from '../../../models/todo'
import { Routes } from '../../../router'
import TodoList, { TodoListTypes } from '../../../containers/todo'

@observer
class TODOPage extends Component<
  ReturnType<typeof storesToProps> & NavigationInjectedProps
> {
  @observable
  public inputText: string | null = null
  @observable
  public filterType: TodoListTypes = TodoListTypes.Active
  public scrollRef = React.createRef<FlatList<ITodo>>()

  public goBack = () => {
    const { navigation } = this.props

    navigation.navigate(Routes.Home)
  }

  public addItem = () => {
    const { addItem, items } = this.props.todoStore

    const text = this.inputText || `item ${items.length + 1}`

    addItem({
      text: text,
    })
  }

  public onChangeText = (text: string) => {
    this.inputText = text
  }

  
  public onChangeFilter = (type: TodoListTypes) => () => {
    this.filterType = type
  }

  public onInputFocus = () => {
    this.filterType = TodoListTypes.Active
  }

  public componentDidMount() {
    reaction(
      () => this.props.todoStore.items.length,
      () => setTimeout(() => this.scrollRef.current!.scrollToEnd(), 0),
    )
  }

  public render() {
    return (
      <Container>
        <Header>
          <BackButton onTouchEnd={this.goBack}>
            <BackButtonText>&#x27A4;</BackButtonText>
          </BackButton>
          <FilterContainer>
            <Filter>
              {Object.values(TodoListTypes).map((type, index) => (
                <FilterControl
                  key={index}
                  isActive={this.filterType === type}
                  onTouchEnd={this.onChangeFilter(type)}
                >
                  <FilterControlText isActive={this.filterType === type}>
                    {type}
                  </FilterControlText>
                </FilterControl>
              ))}
            </Filter>
          </FilterContainer>
        </Header>
        <Body>
          <TodoList forwardRef={this.scrollRef} type={this.filterType} />
        </Body>
        <Footer>
          <InputField>
            <Input
              onFocus={this.onInputFocus}
              onChangeText={this.onChangeText}
              placeholder={'Enter text'}
            />
            <AddButton onTouchEnd={this.addItem}>
              <AddButtonText>+</AddButtonText>
            </AddButton>
          </InputField>
        </Footer>
      </Container>
    )
  }
}

const storesToProps = (
  { store }: IStoresMap,
  _nextProps: NavigationInjectedProps,
) => ({
  todoStore: store.todoStore,
})

export default connector(storesToProps)(TODOPage)
