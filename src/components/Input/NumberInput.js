import React from "react";
import { Image, Text, TextInput, Touchable, TouchableOpacity, View } from "react-native";
import { CommonStyle } from "../../common/GStyles";
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from "react-native-responsive-screen";
import { Fonts } from "../../assets/Fonts";
import { color } from "../../common/GColor";
import MaskInput from 'react-native-mask-input';
import { Icon } from "../../assets";

const NumberInput = ({ state, OnPressCountryCode, value, onBlur, onChangeText, label, Containerstyle, inputstyle, labelstyle, keyboardtype, maxlength, countryCode, editable, multiline, numberOfLines, secureTextEntry }) => {
    const [phone, setPhone] = React.useState('')

    return (

        <View
            style={{
                marginTop: hp(1),
                paddingRight: wp(2),
                // flex: 1,
                backgroundColor: color.gray10,
                borderColor: color.gray10,
                borderWidth: 2,
                borderRadius: 10,
                height: hp(7),
                flexDirection: 'row',
                alignItems: 'center',
                overflow: 'hidden',
                ...Containerstyle
            }}
        >
            <TouchableOpacity onPress={OnPressCountryCode} style={{ flexDirection: 'row', backgroundColor: color.white, width: wp(20), height: '100%', alignItems: 'center', justifyContent: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }}>
                <Text style={{ ...CommonStyle.textStyle('_16', 'SemiBold', 'themeBlack'), }}>+{countryCode}</Text>
                <Image resizeMode="contain" source={Icon.IcnArrowDown} style={{ marginLeft: wp(2) }} />
            </TouchableOpacity>
            {/* <TextInput
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
        /> */}
            <MaskInput
                value={`${value}`}
                onChangeText={(masked, unmasked) => {
                    // setPhone(masked);
                    onChangeText(masked)
                }}
                mask={[/\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                style={{
                    ...CommonStyle.textStyle('_16', 'Regular', 'themeBlack'),
                    paddingHorizontal: 8, paddingVertical: 2, height: '100%',
                    flex: 1,
                    ...inputstyle
                }}
                maxLength={maxlength}
                keyboardType={`${keyboardtype}`}
            />
        </View >
    )
};

export default NumberInput;
