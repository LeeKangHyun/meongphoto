import { Button } from 'react-native'
import styled from 'styled-components/native'

export const BtnView = styled.View`
  position: absolute;
  flex: 1;
  bottom: 30px;
  width: 140px;
  min-height: 55px;
  background-color: rgba(0, 0, 0, 0.22);
  align-self: center;
  justify-content: center;
  z-index: 1;
`

export const Btn = styled(Button)`
  color: #FFFBC4;
  background-color: transparent;
`
