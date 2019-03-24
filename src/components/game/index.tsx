import React from 'react'
import { Component } from 'react'
import { Animated, Easing, View, LayoutChangeEvent } from 'react-native'
import { Container, GameRow, GameBox } from './styles'
import { observable, reaction, computed } from 'mobx'
import { observer } from 'mobx-react'
import generateId from '../../utils/generate-id'

enum GameTypes {
  Default,
  Remove,
  Save,
}

type GameItem = {
  id: string
  group: number
  color: string
  state: GameTypes
}

type AnimationMap = { [key: string]: Animated.Value }

@observer
class Game extends Component {
  @observable
  public layout = {
    width: 0,
    height: 0,
  }
  public isAnimated = false
  @observable
  public gameBoard?: Array<GameItem[]>
  @observable
  public heightAnimationItems: AnimationMap = {}
  @observable
  public visibleAnimationItems: AnimationMap = {}
  public maxGroups = 4
  public colors = ['red', 'blue', 'green', 'orange']
  public maxRows = 10
  public maxColumn = 10
  public boxSize = 50
  public maxItems = 10

  @computed get size() {
    const { width, height } = this.layout

    const boxSize = Math.ceil(Math.max(...Object.values(this.layout)) / this.maxItems)

    return {
      boxSize,
      maxRows: Math.ceil(width / boxSize),
      maxColumn: Math.ceil(height / boxSize)
    }
  }

  public createGameBox = async () => {
    const id = await generateId()
    const group = Math.round(Math.random() * (this.maxGroups - 1))

    return {
      id,
      group,
      color: this.colors[group],
      state: GameTypes.Default,
    }
  }

  public async createGameBoard() {
    this.gameBoard = await Promise.all(
      Array.from(new Array(this.size.maxRows)).map(
        async _er =>
          await Promise.all(
            Array.from(new Array(this.size.maxColumn)).map(this.createGameBox),
          ),
      ),
    )
  }

  public createAnimationMap(ids: string[], startValue: number): AnimationMap {
    return ids.reduce(
      (collection: AnimationMap, id) => ({
        ...collection,
        [id]: new Animated.Value(startValue),
      }),
      {},
    )
  }

  public createGameItemAnimations() {
    if (this.gameBoard) {
      const animationIds = this.getFlatArrayOfId(this.gameBoard)

      this.heightAnimationItems = this.createAnimationMap(
        animationIds,
        this.size.boxSize,
      )

      this.visibleAnimationItems = this.createAnimationMap(animationIds, 1)
    }
  }

  public removeKeysFromObject(
    obj: AnimationMap,
    needToRemove: string[],
  ): AnimationMap {
    return Object.entries(obj).reduce(
      (collection: AnimationMap, [key, animationValue]) => {
        return !needToRemove.includes(key)
          ? { ...collection, [key]: animationValue }
          : collection
      },
      {},
    )
  }

  public getFlatArrayOfId(data: Array<GameItem[]>) {
    return data.reduce((prev: string[], curr) => {
      return [...prev, ...curr.map(box => box.id)]
    }, [])
  }

  public onHideAnimation = (ids: string[]) => {
    return Animated.parallel(
      ids.map(id => {
        const heightAnimation = this.heightAnimationItems[id]
        const scaleAnimation = this.visibleAnimationItems[id]

        return Animated.parallel([
          Animated.timing(scaleAnimation, {
            toValue: 0,
            duration: 180,
            easing: Easing.linear,
          }),
          Animated.timing(heightAnimation, {
            toValue: 0,
            duration: 300,
            delay: 180,
            easing: Easing.quad,
          }),
        ])
      }),
    )
  }

  public onShowAnimation = (ids: string[]) => {
    return Animated.parallel(
      ids.map(id => {
        const scaleAnimation = this.visibleAnimationItems[id]

        return Animated.timing(scaleAnimation, {
          toValue: 1,
          duration: 200,
          easing: Easing.ease,
        })
      }),
    )
  }

  public async addNewBoxesInBoard(
    board: Array<GameItem[]>,
    onNewItem?: (item: GameItem) => void,
  ) {
    return await Promise.all(
      board.map(async boxes => [
        ...(await Promise.all(
          Array.from(new Array(this.size.maxColumn - boxes.length)).map(async () => {
            const newBox = await this.createGameBox()

            if (onNewItem) onNewItem(newBox)

            return newBox
          }),
        )),
        ...boxes,
      ]),
    )
  }

  public onGameBoxClick = (currentBox: GameItem) => async () => {
    if (!this.gameBoard || this.isAnimated) {
      return
    }

    this.isAnimated = true

    const itemsToRemove = this.gameBoard.map(boxes =>
      boxes.filter(box => box.group === currentBox.group),
    )

    const idsToRemove = this.getFlatArrayOfId(itemsToRemove)

    const savedItems = this.gameBoard!.map(boxes =>
      boxes.filter(box => box.group !== currentBox.group),
    )

    const newBoxesIds: string[] = []

    const newBoard = await this.addNewBoxesInBoard(savedItems, box => {
      newBoxesIds.push(box.id)
    })

    const newHeightAnimationItems = {
      ...this.createAnimationMap(newBoxesIds, this.size.boxSize),
      ...this.removeKeysFromObject(this.heightAnimationItems, idsToRemove),
    }

    const newScaleAnimationItems = {
      ...this.createAnimationMap(newBoxesIds, 0),
      ...this.removeKeysFromObject(this.visibleAnimationItems, idsToRemove),
    }

    this.onHideAnimation(idsToRemove).start(() => {
      setTimeout(() => {
        this.gameBoard = newBoard

        this.heightAnimationItems = newHeightAnimationItems
        this.visibleAnimationItems = newScaleAnimationItems

        this.onShowAnimation(newBoxesIds).start(() => {
          this.isAnimated = false
        })
      }, 0)
    })
  }

  public async createGame() {
    await this.createGameBoard()
    this.createGameItemAnimations()
  }

  public onLayout = (event: LayoutChangeEvent) => {
    if (event && event.nativeEvent.layout) {
      const { width, height } = event.nativeEvent.layout

      this.layout = {
        width,
        height,
      }
    }
  }

  public componentDidMount() {
    reaction(
      () => this.layout,
      () => {
        this.createGame()
      },
    )
  }

  public render() {
    return (
      <Container onLayout={this.onLayout}>
        {this.gameBoard &&
          this.gameBoard.map((boxes, index) => (
            <GameRow key={index}>
              {boxes.map(box => {
                const heightAnimation = this.heightAnimationItems[box.id]
                const scaleAnimation = this.visibleAnimationItems[box.id]

                if (!heightAnimation || !scaleAnimation) {
                  return null
                }

                return (
                  <GameBox
                    key={box.id}
                    style={{
                      width: this.size.boxSize,
                      height: heightAnimation,
                      backgroundColor: box.color,
                      opacity: scaleAnimation,
                      transform: [
                        {
                          scale: scaleAnimation,
                        },
                      ],
                    }}
                    onTouchEnd={this.onGameBoxClick(box)}
                  />
                )
              })}
            </GameRow>
          ))}
      </Container>
    )
  }
}

export default Game
