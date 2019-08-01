import { createStackNavigator, createAppContainer } from 'react-navigation'

import Home from '~/Pages/Home'
import PhotoList from '~/Pages/PhotoList'

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  PhotoList: {
    screen: PhotoList,
  },
}, {
  initialRouteName: 'Home',
  headerMode: 'none',
})

export default createAppContainer(AppNavigator)
