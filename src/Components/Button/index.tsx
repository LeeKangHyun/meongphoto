import * as React from 'react'
import { ReactNode, FunctionComponent } from 'react'
import {
  View,
  Text,
} from 'react-native'

interface Props {
  onPress?(): void
  children: ReactNode | ReactNode[]
}

const ButtonComponent: FunctionComponent<Props> = ({
  onPress,
  children,
}) => {
  return (
    <View>
      <Text onPress={onPress}>
        {children}
      </Text>
    </View>
  )
}

export default ButtonComponent

