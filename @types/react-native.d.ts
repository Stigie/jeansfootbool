/**
 * This type fixes an error in types when using styled-components
 *
 * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/29795
 */
export * from 'react-native'

import { ReactNode, ReactText, ReactElement } from 'react'
import {
  ViewProps as ViewPropsDefault,
  TextProps as TextPropsDefault,
} from 'react-native'

type Element = ReactElement<any> | boolean | null | undefined
declare module 'react-native' {
  interface ViewProps {
    children?: Element | (Element | Element[])[]
  }

  interface TextProps {
    children?:
      | ReactText
      | ReactText[]
      | ReactElement<TextProps>
      | ReactElement<TextProps>[]
  }
}
