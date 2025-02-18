import React from "react";
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { CommonStyle } from "../../common/GStyles";
import { heightPercentageToDP, widthPercentageToDP } from "react-native-responsive-screen";
import { Fonts, FontSize } from "../../assets/Fonts";
import { color } from "../../common/GColor";

const LabelInput = ({ state, isRightIcon, rightIcon, rightIconPress, isLeftIcon, leftIcon, value, onBlur, onChangeText, label, rightIconStyle, Containerstyle, inputstyle, labelstyle, keyboardtype, maxlength, autoCapitalize, editable, multiline, numberOfLines, secureTextEntry, placeHolder, placeholderTextColor, Title, isTitle }) => (
    <View
        style={{
            marginTop: heightPercentageToDP(1),
            paddingHorizontal: widthPercentageToDP(5),
            backgroundColor: color.gray10,
            borderRadius: 10,
            height: 60,
            flexDirection: 'row',
            alignItems: 'center',
            ...Containerstyle
        }}
    >
        {isTitle && <Text style={{ fontFamily: Fonts.Regular, fontSize: FontSize._16, color: color.gray1, marginLeft: widthPercentageToDP(2), ...labelstyle }}>{Title}</Text>}
        {isLeftIcon &&
            <Image resizeMode="contain" source={leftIcon} style={{}} />
        }
        <TextInput
            value={`${value}`}
            style={{
                ...CommonStyle.textStyle('_16', 'Regular', 'themeBlack'),
                paddingHorizontal: 8, paddingVertical: 2, height: '100%',
                flex: 1,
                ...inputstyle
            }}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardtype}
            maxLength={maxlength}
            autoCapitalize={autoCapitalize}
            editable={editable}
            multiline={multiline}
            numberOfLines={numberOfLines}
            secureTextEntry={secureTextEntry}
            placeholder={placeHolder}
            placeholderTextColor={placeholderTextColor || color.gray1}
        />
        {isRightIcon &&
            <TouchableOpacity onPress={rightIconPress}>
                <Image resizeMode="contain" source={rightIcon} style={{ rightIconStyle }} />
            </TouchableOpacity>
        }
    </View >
);

export default LabelInput;
