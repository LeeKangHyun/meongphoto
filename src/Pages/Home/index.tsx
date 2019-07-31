import * as React from 'react'
import { Component, Fragment } from 'react'

import Image from '~/Components/ImagesComponent'

import Content from './Component/Content'

import {
  BtnView,
  Btn,
} from './styled'

class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Image source={require('~/images/meong.jpeg')}>
          <BtnView>
            <Btn
              onPress={() => {}}
              title={'둘러보기'}
            />
          </BtnView>
        </Image>
      </Fragment>
    )
  }
}

export default Home
