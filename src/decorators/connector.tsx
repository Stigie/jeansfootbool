import { inject, IStoresToProps, observer } from 'mobx-react'
import React from 'react'

export default function connector<S, P, I, C>(
  mapStore: IStoresToProps<S, P, I, C>,
) {
  return (Component: React.ComponentType<I & P> & {
    navigationOptions?: any
  }) => {
    const Observer = observer(Component)
    const navigatorOptions = Component.navigationOptions

    @inject(mapStore)
    class Connector extends React.Component<I & P, {}> {
      static navigationOptions = navigatorOptions

      public render() {
        return <Observer {...this.props} />
      }
    }

    // @ts-ignore
    return Connector as React.ComponentClass<P>
  }
}
