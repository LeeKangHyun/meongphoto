import { Platform } from 'react-native'

export default {
  BMHANNA: Platform.select({
    ios: 'BMHANNAPro',
    android: 'BMHANNA',
  }),
  BMDOHYEON: Platform.select({
    ios: 'BMDoHyeon',
    android: 'BMDOHYEON',
  }),
}
