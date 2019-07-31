import * as React from 'react'
import { FunctionComponent } from 'react'

import { TitleWrap, Title } from './styled'

type Props = {
  label: string
}

const TitleComponent: FunctionComponent<Props> = ({
  label,
}) => {
  return (
    <TitleWrap>
      <Title>{label}</Title>
    </TitleWrap>
  )
}

export default TitleComponent
