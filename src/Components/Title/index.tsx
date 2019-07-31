import * as React from 'react'
import { FunctionComponent } from 'react'
import { TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

import { TitleWrap, Title } from './styled'

type Props = {
  label: string
}

const TitleComponent: FunctionComponent<Props> = ({
  label,
}) => {
  return (
    <TitleWrap>
      <Link
        component={TouchableOpacity}
        to={'/'}>
        <Title>{label}</Title>
      </Link>
    </TitleWrap>
  )
}

export default TitleComponent
