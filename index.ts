import { AppRegistry } from 'react-native';

import App from './src';
import * as appInfo from './app.json';

AppRegistry.registerComponent(appInfo.name, () => App);
