import * as React from 'react'
import { SafeAreaView, StyleSheet } from 'react-native'
import { NativeRouter, Route, Switch } from 'react-router-native'

import Title from '~/Components/Title'

import Home from '~/Pages/Home'
import Photo from '~/Pages/PhotoList'

export default () => {
  return (
    <NativeRouter>
      <SafeAreaView style={styles.safe}>
        <Title label="멍이의 일상" />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/photo" component={Photo} />
        </Switch>
      </SafeAreaView>
    </NativeRouter>
  )
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
