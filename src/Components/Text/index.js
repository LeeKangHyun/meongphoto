import * as React from 'react'
import styled from 'styled-components/native'

import { Fonts } from '~/Utils'

export const Text = styled.Text`
  font-family: ${Fonts.BMDOHYEON};
  font-size: 40px;
  font-weight: 400;
`

export default ({ children }) => {
  return <Text>{children}</Text>
}
