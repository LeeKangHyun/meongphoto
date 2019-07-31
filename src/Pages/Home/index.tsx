import * as React from 'react'
import { Component, Fragment } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { Link } from 'react-router-native'

import Image from '~/Components/ImagesComponent'
import Button from '~/Components/Button'

import Content from './Component/Content'

import {
  BtnView,
} from './styled'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Image source={require('~/images/meong.jpeg')}>
          <BtnView>
            <Link
              component={TouchableOpacity}
              to={'/photo'}>
              <Button>
                <Text>둘러보기</Text>
              </Button>
            </Link>
          </BtnView>
        </Image>
      </Fragment>
    )
  }
}

export default Home
