import * as React from 'react'
import { ReactNode, FunctionComponent } from 'react'
import styled from 'styled-components/native'

import { Fonts } from '~/Utils'

export const Text = styled.Text`
  font-family: ${Fonts.BMDOHYEON};
  font-size: 40px;
`

type Props = {
  children: ReactNode
}

const TextComponent: FunctionComponent<Props> =  ({ children }) => {
  return <Text>{children}</Text>
}

export default TextComponent
