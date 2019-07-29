import React, { Component, Fragment } from 'react'
import { View, Button } from 'react-native'

import Image from '~/Components/ImagesComponent'

import Content from './Component/Content'

const BtnView = ({ children }) => {
  return (
    <View style={{
      flex: 1,
      width: 140,
      minHeight: 55,
      position: 'absolute',
      zIndex: 1,
      bottom: 30,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0, 0, 0, 0.22)',
    }}>
      {children}
    </View>
  )
}

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <Content />
        <Image source={require('~/images/meong.jpeg')}>
          <BtnView>
            <Button
              onPress={() => {}}
              title={'둘러보기'}
              color="#FFFBC4"
            />
          </BtnView>
        </Image>
      </Fragment>
    )
  }
}
