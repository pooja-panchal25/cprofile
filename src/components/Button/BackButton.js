import React from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import { Icon } from '../../assets/Icon';

const BackButton = ({
    icon, onPress, style, imageStyle
}) => (
    <View style={[{ justifyContent:'center'} , style]}>
        <TouchableOpacity
            // onPress={() => { this.props.navigation.goBack() }}
            onPress={() => onPress()}
        >
            <Image style={imageStyle} resizeMode='contain' source={Icon.IcnArrowLeft} />
        </TouchableOpacity>
    </View>
);

export default BackButton;
