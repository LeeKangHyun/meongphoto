import * as React from 'react'
import { ReactNode, FunctionComponent } from 'react'
import {
  View,
  Text,
} from 'react-native'

interface Props {
  children: ReactNode
}

const ButtonComponent: FunctionComponent<Props> = ({
  children,
}) => {
  return (
    <View>
      <Text>
        {children}
      </Text>
    </View>
  )
}

export default ButtonComponent

