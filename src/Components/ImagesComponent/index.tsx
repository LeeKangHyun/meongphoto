import * as React from 'react'
import { ReactNode } from 'react'
import { ImageSourcePropType } from 'react-native'

import { Container, Image } from './styled'

type Props = {
  source: ImageSourcePropType
  children: ReactNode
}

const ImageComponent: React.FunctionComponent<Props> = ({ source, children }) => {
  return (
    <Container>
      {children}
      <Image
        resizeMode={'cover'}
        source={source}
      />
    </Container>
  )
}

export default ImageComponent
