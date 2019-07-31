import * as React from 'react'
import { NativeRouter, BackButton, Route, Switch } from 'react-router-native'

import Title from '~/Components/Title'
import Home from '~/Pages/Home'
import Photo from '~/Pages/PhotoList'

import { SafeArea } from './styled'

const RouteComponent = () => {
  return (
    <NativeRouter>
      <BackButton>
        <SafeArea>
          <Title label="댕댕쓰" />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/photo" component={Photo} />
          </Switch>
        </SafeArea>
      </BackButton>
    </NativeRouter>
  )
}

export default RouteComponent
