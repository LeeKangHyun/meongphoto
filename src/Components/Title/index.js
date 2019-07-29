import React from 'react'

import { TitleWrap, Title } from './styled'

export default ({
  label,
}) => {
  return (
    <TitleWrap>
      <Title>{label}</Title>
    </TitleWrap>
  )
}
