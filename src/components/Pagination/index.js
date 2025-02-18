import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Fonts, FontSize } from '../../assets';
import { Icon } from '../../assets/Icon';
import { color } from '../../common/GColor';

const Pagination = ({ index, ContainerStyle, isCountHide, totalCount }) => (
    <View style={[{ justifyContent: 'center', alignItems: 'center', marginHorizontal: widthPercentageToDP(5), }, ContainerStyle]}>
        {isCountHide ? null : <Text style={{ color: color.themegrey, fontFamily: Fonts.Regular, fontSize: FontSize._20 }}>{`Step   `}<Text style={{ color: color.themeDark, fontFamily: Fonts.SemiBold, fontSize: FontSize._22 }}>{`${index}`}</Text>/{totalCount.length}</Text>}
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: heightPercentageToDP(2) }}>
            {totalCount.map((item, stepIndex) =>
                <View style={{ backgroundColor: index > stepIndex ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            )}
            {/* <View style={{ backgroundColor: index > 0 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            <View style={{ backgroundColor: index > 1 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            <View style={{ backgroundColor: index > 2 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            <View style={{ backgroundColor: index > 3 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            <View style={{ backgroundColor: index > 4 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View>
            <View style={{ backgroundColor: index > 5 ? color.themeColor : color.gray30, width: widthPercentageToDP(10), height: 6, borderRadius: 20, marginHorizontal: widthPercentageToDP(1) }}></View> */}
        </View>
    </View>
);

export default Pagination;
