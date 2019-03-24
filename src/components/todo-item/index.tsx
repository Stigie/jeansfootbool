import * as React from 'react'
import { ITodo, TodoStates } from '../../models/todo'
import {
  Container,
  Check,
  Delete,
  ItemText,
  CheckText,
  DeleteText,
  ItemInput,
} from './styles'
import { observer } from 'mobx-react'
import { observable, computed } from 'mobx'
import { Animated } from 'react-native'

export interface ITodoItemProps {
  item: ITodo
  onChangeState: (item: ITodo, state: TodoStates) => void
  onEdit: (item: ITodo, text: string) => void
}

@observer
class TodoItem extends React.Component<ITodoItemProps, any> {
  @observable
  public checkAnimation = new Animated.Value(0)
  @observable
  public containerMoveAnimation = new Animated.Value(100)
  @observable
  public containerScaleAnimation = new Animated.Value(0.9)
  @observable
  public inputText = ''
  @observable
  public isEditMode = false

  public startCheckAnimation = async () => {
    return new Promise(resolve => {
      Animated.timing(this.checkAnimation, {
        toValue: 100,
        duration: 350,
      }).start(() => {
        this.checkAnimation.setValue(0)
        resolve()
      })
    })
  }

  @computed
  public get checkBackgroundAnimation() {
    const { state } = this.props.item
    const kit = ['rgb(255,255,255)', 'rgb(0, 200, 83)']

    if (state !== TodoStates.DEFAULT) {
      kit.reverse()
    }

    return this.checkAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: kit,
    })
  }

  @computed
  public get checkColorAnimation() {
    const { state } = this.props.item
    const kit = ['rgb(176, 190, 197)', 'rgb(255,255,255)']

    if (state !== TodoStates.DEFAULT) {
      kit.reverse()
    }

    return this.checkAnimation.interpolate({
      inputRange: [0, 100],
      outputRange: kit,
    })
  }

  public startContainerAnimation = () => {
    Animated.parallel([
      Animated.timing(this.containerMoveAnimation, {
        toValue: 0,
        duration: 300,
      }),
      Animated.timing(this.containerScaleAnimation, {
        toValue: 1,
        duration: 250,
        delay: 150
      })
    ]).start()
  }
  public onToggleCheck = async () => {
    await this.startCheckAnimation()

    const { onChangeState, item } = this.props
    const newState =
      item.state === TodoStates.DEFAULT ? TodoStates.DONE : TodoStates.DEFAULT

    if (onChangeState) onChangeState(item, newState)
  }

  public onDelete = () => {
    const { onChangeState, item } = this.props

    if (onChangeState) onChangeState(item, TodoStates.DELETE)
  }

  public onSetEditMode = () => {
    this.isEditMode = true
  }

  public onEndEditing = () => {
    this.isEditMode = false

    if (!this.inputText) {
      return
    }

    const { onEdit, item } = this.props

    if (onEdit) onEdit(item, this.inputText)
  }

  public onChangeText = (text: string) => {
    this.inputText = text
  }

  public componentDidMount() {
    this.startContainerAnimation()
  }

  public render() {
    const { text, state } = this.props.item

    return (
      <Container
        style={{
          transform: [
            {
              scale: this.containerScaleAnimation
            },
            {
              translateY: this.containerMoveAnimation
            }
          ],
        }}
      >
        <Check
          style={{
            backgroundColor: this.checkBackgroundAnimation,
          }}
          state={state}
          onTouchEnd={this.onToggleCheck}
        >
          <CheckText
            style={{
              color: this.checkColorAnimation,
            }}
            state={state}
          >
            &#10003;
          </CheckText>
        </Check>
        {!this.isEditMode ? (
          <ItemText onPress={this.onSetEditMode}>{text}</ItemText>
        ) : (
          <ItemInput
            defaultValue={text}
            onChangeText={this.onChangeText}
            onEndEditing={this.onEndEditing}
            autoFocus
          />
        )}

        {state !== TodoStates.DELETE && (
          <Delete state={state} onTouchEnd={this.onDelete}>
            <DeleteText state={state}>&#x2716;</DeleteText>
          </Delete>
        )}
      </Container>
    )
  }
}

export default TodoItem
