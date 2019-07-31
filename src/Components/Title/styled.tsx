import styled from 'styled-components/native'

import { Text } from '~/Components/Text'

export const TitleWrap = styled.View`
  height: 60px;
  margin-bottom: 10px;
  justify-content: flex-start;
  align-items: center;
  background-color: rgba(211, 252, 191, 0.51);
`

export const Title = styled(Text)`
  flex: 1;
  font-size: 24px;
  justify-content: center;
  text-align: center;
  line-height: 60px;
  color: #515151;
`
