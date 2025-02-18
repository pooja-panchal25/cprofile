import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { CommonStyle } from "../../common/GStyles";
import { Icon } from '../../assets/Icon';
import { color } from '../../common/GColor';

const ThemeButton = ({
    icon, onPress, Conrtainerstyle, buttonConrtainerstyle, imageStyle, leftIcon, isLeftIcon, buttonText, textStyle
}) => (
    <View style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }, Conrtainerstyle]} >
        <TouchableOpacity
            onPress={() => onPress()}
            style={[{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: color.themeColor, flex: 1, paddingVertical: heightPercentageToDP(1.5), borderRadius: 30 }, buttonConrtainerstyle]}
        >
            {isLeftIcon &&
                <Image style={[{ marginRight: widthPercentageToDP(2) , }, imageStyle]} resizeMode='contain' source={leftIcon} />
            }
            <Text style={[{ ...CommonStyle.textStyle('_16', 'Regular', 'themeBlack'), }, textStyle]} >{buttonText}</Text>

        </TouchableOpacity>
    </View>
);

export default ThemeButton;
