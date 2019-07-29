import { Platform } from 'react-native'

export const Fonts = {
  BMHANNA: Platform.select({
    ios: 'BMHANNAPro',
    android: 'BMHANNA',
  }),
  BMDOHYEON: Platform.select({
    ios: 'BMDoHyeon',
    android: 'BMDOHYEON',
  }),
}
