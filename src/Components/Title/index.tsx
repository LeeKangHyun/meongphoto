import * as React from 'react'
import { FunctionComponent } from 'react'
import { TouchableOpacity } from 'react-native'

import { TitleWrap, Title } from './styled'

type Props = {
  onPress?(): void
  label: string
}

const TitleComponent: FunctionComponent<Props> = ({
  label,
  onPress,
}) => {
  return (
    <TitleWrap>
      <TouchableOpacity>
        <Title onPress={onPress}>{label}</Title>
      </TouchableOpacity>
    </TitleWrap>
  )
}

export default TitleComponent
