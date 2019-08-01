import * as React from 'react'
import { Component } from 'react'
import { TouchableOpacity } from 'react-native'
import { NavigationScreenProp } from 'react-navigation'

import Image from '~/Components/ImagesComponent'
import Button from '~/Components/Button'
import Title from '~/Components/Title'
import { Wrap } from '~/Components/Layout'

import Content from './Component/Content'

import {
  BtnView,
} from './styled'

interface Props<P> {
  navigation: NavigationScreenProp<P>
}

class Home<P> extends Component<Props<P>> {
  render() {
    const { navigate } = this.props.navigation
    return (
      <Wrap>
        <Title
          label="댕댕쓰"
          onPress={() => navigate('PhotoList')}
        />
        <Content />
        <Image source={require('~/images/meong.jpeg')}>
          <BtnView>
            <TouchableOpacity>
              <Button label="보러가기!!" color="#FFFBC4" />
            </TouchableOpacity>
          </BtnView>
        </Image>
      </Wrap>
    )
  }
}

export default Home
