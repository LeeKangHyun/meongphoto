import * as React from 'react'
import { FunctionComponent } from 'react'

import { Wrap, Button } from './styled'

interface Props {
  color: string
  label: string
  onPress?(): void
}

const ButtonComponent: FunctionComponent<Props> = ({
  label, color,
  onPress,
}) => {
  return (
    <Wrap>
      <Button onPress={onPress} color={color}>
        {label}
      </Button>
    </Wrap>
  )
}

export default ButtonComponent
