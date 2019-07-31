import * as React from 'react'
import { Component, Fragment } from 'react'
import { Text, View, Platform, Linking } from 'react-native'

interface Props {}

interface State {
  data: object
}

class PhotoList extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      data: {},
    }
  }

  componentDidMount(): void {
    this.getData()
    .then(data => {
      this.setState(() => ({
        data: data,
      }))
    })
  }

  getData = async () => {
    try {
      const response = await fetch(
        'https://facebook.github.io/react-native/movies.json'
      )
      return await response.json()
    } catch (err) {
      console.log(err)
    }
  }

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
          <Text>
            {JSON.stringify(this.state.data, null, 2)}
          </Text>
          <Text onPress={() => this.openLink('01085593154')}>전화걸기</Text>
        </View>
      </Fragment>
    )
  }
}

export default PhotoList
