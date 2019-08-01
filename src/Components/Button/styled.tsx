import { View, Text } from 'react-native'
import styled from 'styled-components'
import { Fonts } from '~/Utils'

export const Wrap = styled(View)``

interface ButtonProps {
  color: string
}

export const Button = styled(Text)<ButtonProps>`
  text-align: center;
  font-family: ${Fonts.BMDOHYEON};
  font-size: 18px;
  color: ${({ color = '#222' }) => color};
`
