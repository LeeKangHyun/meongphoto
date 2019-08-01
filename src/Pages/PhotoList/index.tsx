import * as React from 'react'
import { Component, Fragment } from 'react'
import { Text, View, Platform, Linking } from 'react-native'

interface Props {}

class PhotoList extends Component<Props> {
  openLink = (pNum: string) => {
    const url = Platform.select({
      ios: `telprompt:${pNum}`,
      android: `tel:${pNum}`,
    })

    return Linking.canOpenURL(url).then((canOpen: boolean) => {
      if (canOpen) {
        return Linking.openURL(url).catch(err => Promise.reject(err))
      }
    })
  }

  render() {
    return (
      <Fragment>
        <View>
          <Text onPress={() => this.openLink('01085593154')}>전화걸기</Text>
        </View>
      </Fragment>
    )
  }
}

export default PhotoList
