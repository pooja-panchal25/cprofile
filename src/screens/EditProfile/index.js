import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, TextInput } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings, changeLanguage } from '../../localization/i18n';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryPicker, { Flag } from "react-native-country-picker-modal";
import moment from "moment";


import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { Icon } from "../../assets/Icon";
import { getHeight, getWidth, keyboard_type } from "../../common/GConstants"
import { color } from "../../common/GColor";
import { Fonts, FontSize, normalize } from "../../assets/Fonts";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import BackButton from '../../components/Button/BackButton';
import Pagination from '../../components/Pagination';
import ThemeButton from '../../components/Button/ThemeButton';
import NumberInput from "../../components/Input/NumberInput";
import LabeledInput from "../../components/Input/LabeledInput";

class EditProfile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Subject: '',
            EmailId: '',
            Description: '',
            RoutingName: '',
            pickerShow: false,
            modalVisible: false,
            email: "jessica_roy@gmail.com",
            mobileNumber: '7074706718',
            countryName: '',
            countryCode: '91',
            countryFlag: '',
            Name: 'Jessica Roy',
            userName: '@jess123',
            dateOfBirth: '23 May, 1995',
            Location: 'Newyork, USA',
            Affiliations: 'It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader',
            Bio: 'It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader',
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <BackButton onPress={() => { this.props.navigation.goBack() }} style={{ zIndex: 20 }} />
                        <Text style={styles.headerText}>{strings('Label.EditProfile')}</Text>
                    </View>
                    <KeyboardAwareScrollView style={{ flex: 1, }} bounces={false} enableOnAndroid showsVerticalScrollIndicator={false}>
                        <View style={styles.subView}>
                            <View style={styles.formView}>
                                <View style={styles.profileImageView}>
                                    <Image resizeMode="contain" source={Images.imgAccountProfile} style={styles.profileImage} />
                                    <TouchableOpacity style={styles.verifyImage} >
                                        <Image resizeMode="contain" style={{tintColor:color.themeBlack}} source={Icon.IcnCamera} />
                                    </TouchableOpacity>
                                </View>
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Name: changeText })}
                                    value={this.state.Name}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnUser}         
                                    placeHolder={strings('PlaceHolders.Name')}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ userName: changeText })}
                                    value={this.state.userName}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnUser}
                                    placeHolder={strings('PlaceHolders.UseName')}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ email: changeText })}
                                    value={this.state.email}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnLock}
                                    placeHolder={strings('PlaceHolders.Email')}
                                    keyboardtype={keyboard_type.email}
                                />
                                <NumberInput
                                    onChangeText={(changeText) => this.setState({ mobileNumber: changeText })}
                                    OnPressCountryCode={() => this.setState({ pickerShow: true })}
                                    countryCode={this.state.countryCode}
                                    value={this.state.mobileNumber}
                                    maxlength={12}
                                    keyboardtype={keyboard_type.numeric}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ dateOfBirth: changeText })}
                                    value={this.state.dateOfBirth}
                                    isLeftIcon={true}
                                    leftIcon={Icon.Icncake}
                                    isRightIcon={true}
                                    rightIcon={Icon.IcnCalendarFill}
                                    rightIconPress={() => console.log("show calender")}
                                    placeHolder={strings('PlaceHolders.DateOfBirth')}
                                    editable={false}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Location: changeText })}
                                    value={this.state.Location}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnLocation}
                                    isRightIcon={true}
                                    rightIcon={Icon.IcnLocationFill}
                                    rightIconPress={() => console.log("show location manager")}
                                    placeHolder={strings('PlaceHolders.Location')}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Bio: changeText })}
                                    value={this.state.Bio}
                                    placeHolder={strings('PlaceHolders.WriteBio')}
                                    multiline={true}
                                    numberOfLines={10}
                                    Containerstyle={{ height: 150, paddingVertical: hp(2), flexDirection: 'column', alignItems: 'flex-start', width: "100%" }}
                                    isTitle={true}
                                    Title={"Bio"}
                                    inputstyle={{ width: '100%' }}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Affiliations: changeText })}
                                    value={this.state.Affiliations}
                                    placeHolder={strings('PlaceHolders.WriteHere')}
                                    multiline={true}
                                    numberOfLines={10}
                                    Containerstyle={{ height: 150, paddingVertical: hp(2), flexDirection: 'column', alignItems: 'flex-start', width: "100%" }}
                                    inputstyle={{ width: '100%' }}
                                    isTitle={true}
                                    Title={"Affiliations"}
                                />
                            </View>
                        </View>
                    </KeyboardAwareScrollView>

                    <ThemeButton
                        onPress={() => {
                            this.setState({ modalVisible: true })
                            this._CountDown()
                        }}
                        buttonText={strings('Button.UpdateButton')}
                        Conrtainerstyle={{ marginHorizontal: wp(5), marginVertical: hp(3) }}
                    />

                    {this.state.pickerShow && (
                        <CountryPicker
                            withAlphaFilter
                            withFilter
                            withFlag
                            withCallingCode
                            onSelect={(country) => {
                                this.setState({ countryName: country.name, countryCode: country.callingCode[0], countryFlag: country.cca2 });
                            }}
                            onClose={() => this.setState({ pickerShow: false })}
                            visible
                            withCountryNameButton
                        />
                    )}
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(EditProfile)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.gray49, flex: 1 },
    splashImage: {
        position: 'absolute',
        right: getWidth(0),
        bottom: getHeight(0)
    },
    mainView: { flex: 1, },
    headerMain: {
        // flexDirection: 'row',
        marginHorizontal: wp(5),
        height: hp(6),
        justifyContent: 'center',
        paddingBottom: hp(1)
    },
    headerText: {
        fontSize: normalize(20),
        fontFamily: Fonts.SemiBold,
        color: color.themeDark,
        textAlign: 'left',
        marginVertical: hp(1)
    },
    headerImageView: { position: 'absolute', justifyContent: 'center', alignItems: 'center', flex: 1, right: 0, left: 0, zIndex: 0 },
    subView: {
        paddingTop: hp(1),
    },
    formView: {
        marginHorizontal: wp(5),
        alignItems: 'center',
        paddingBottom: hp(2),
        marginTop: hp(5)
    },
    LabelText: {
        fontSize: normalize(15),
        fontFamily: Fonts.Regular,
        color: color.themegrey,
        marginTop: hp(1),
        marginVertical: hp(3),
        marginHorizontal: wp(3),
        textAlign: 'center',
    },
    TypeText: {
        fontSize: normalize(18),
        fontFamily: Fonts.SemiBold,
        color: color.themeBlack,
    },
    TypeSubText: {
        fontSize: normalize(13),
        fontFamily: Fonts.Regular,
        color: color.gray1,
    },
    inputLabel: {
        fontSize: normalize(15),
        fontFamily: Fonts.Regular,
        fontWeight: '600',
        color: color.themeDark,
        textAlign: 'left',
        width: '100%'
        // flex: 1,
        // backgroundColor: 'grey'
    },
    labelView: { flex: 1, width: '100%', marginVertical: hp(1) },
    profileImageView: { borderRadius: 100, borderColor: "#EBEBEB", borderWidth: 2, width: wp(28), height: wp(28), alignItems: 'center', justifyContent: 'center' },
    verifyImage: { position: 'absolute', bottom: hp(1), right: wp(1), width: wp(8), height: wp(8),borderWidth:2 , borderColor:color.white, backgroundColor: color.themeColor, borderRadius: 50, alignItems: 'center', justifyContent: 'center' },
})