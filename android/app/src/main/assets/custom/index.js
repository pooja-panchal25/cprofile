
import { ScaledSheet, scale, verticalScale, moderateScale } from 'react-native-size-matters'

export const Fonts = {
    Regular: 'EuclidCircularA-Regular',
    SemiBold: 'EuclidCircularA-SemiBold',
    Bold: 'EuclidCircularA-Bold'
}

export const FontSize = {
    _35: 35,
    _32: 32,
    _30: 30,
    _28: 28,
    _26: 26,
    _25: 25,
    _24: 24,
    _23: 23,
    _22: 22,
    _21: 21,
    _20: 20,
    _19: 19,
    _18: 18,
    _17: 17,
    _16: 16,
    _15: 15,
    _14: 14,
    _13: 13,
    _12: 12,
    _11: 11,
    _10: 10,
}


export function normalize(size) {
    return moderateScale(size)
}