import { StyleSheet, Platform , Dimensions, PixelRatio } from "react-native";
import { fontFamily, fontSize } from "./GConstants";
import { Fonts, FontSize } from "../assets"
import { color } from "../common/GColor"
import { ScaledSheet, scale, verticalScale, moderateScale } from 'react-native-size-matters'

export const GStyles = StyleSheet.create({
    lblNavigation: {
        fontFamily: fontFamily.medium,
        fontSize: fontSize.size16,
        color: color.black,
        letterSpacing: 0.02,
    }
})


const {
  width: SCREEN_WIDTH,
  height: SCREEN_HEIGHT,
} = Dimensions.get('window');

// based on iphone 5s's scale
const scale1 = SCREEN_WIDTH / 320;

export const CommonStyle = {
  textStyle: (size = '_12', family = 'Regular', color = 'White', align = 'left') => {
    return {
      color: color[color],
      fontSize: moderateScale(FontSize[size]),
      fontFamily: Fonts[family]
    }
  }
}

export function responsiveFont(size = 0) {
  const newSize = size * scale1
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize))
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2
  }
}