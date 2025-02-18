import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings, changeLanguage } from '../../localization/i18n';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryPicker, { Flag } from "react-native-country-picker-modal";


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
import LabeledInput from '../../components/Input/LabeledInput'

class ResetPassword extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            passWord: '',
            confPassword: '',
            secureTextEntryPass: true,
            secureTextEntryConfPass: true,
            modalVisible: false,
        }
    }

    componentDidMount() {
        // changeLanguage("en")
    }

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <BackButton onPress={() => { this.props.navigation.goBack() }} style={{ zIndex: 20 }} />
                    </View>

                    {/* <Pagination index={1} /> */}
                    <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
                        <View style={styles.subView}>
                            <View style={styles.formView}>
                                <Text style={styles.headerText}>{strings('Label.ResetPassword')}</Text>
                                <Text style={styles.LabelText}>{strings('Label.ResetPasswordSubTitle')}</Text>
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ passWord: changeText })}
                                    value={this.state.passWord}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnLock}
                                    isRightIcon={true}
                                    rightIcon={this.state.passWord ? Icon.IcnEyeBlank : Icon.IcnEyeFill}
                                    rightIconPress={() => this.setState({ secureTextEntryPass: !this.state.secureTextEntryPass })}
                                    secureTextEntry={this.state.secureTextEntryPass}
                                    placeHolder={strings('PlaceHolders.NewPassword')}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ confPassword: changeText })}
                                    value={this.state.confPassword}
                                    isLeftIcon={true}
                                    leftIcon={Icon.IcnLock}
                                    isRightIcon={true}
                                    rightIcon={this.state.confPassword ? Icon.IcnEyeBlank : Icon.IcnEyeFill}
                                    rightIconPress={() => this.setState({ secureTextEntryConfPass: !this.state.secureTextEntryConfPass })}
                                    secureTextEntry={this.state.secureTextEntryConfPass}
                                    placeHolder={strings('PlaceHolders.ConfirmPassword')}
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
                        </View>
                    </ScrollView>

                    <ThemeButton
                        onPress={() => this.setState({ modalVisible: true })}
                        buttonText={strings('Button.UpdateButton')}
                        Conrtainerstyle={{ marginHorizontal: wp(5), marginVertical: hp(3) }}
                    />

                    <Modal animationType="slide" transparent={true} visible={this.state.modalVisible}>
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ modalVisible: false })} style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: "rgba(0,0,0,0.5)", paddingHorizontal: wp(5), }}>
                            <View style={styles.modal}>
                                <KeyboardAwareScrollView
                                    enableOnAndroid={true}
                                    bounces={false}
                                    showsVerticalScrollIndicator={false}
                                >
                                    <View style={{ flex: 1, alignItems: 'center', }}>
                                        <View style={{ height: wp(30) }}>

                                        </View>
                                        <Text style={styles.headerText}>{strings('Label.PasswordChangeTitle')}</Text>

                                        <ThemeButton
                                            onPress={() => this.props.navigation.navigate("Login")}
                                            buttonText={strings('Button.BackToUpdate')}
                                            buttonConrtainerstyle={{ marginVertical: hp(4) }}
                                        />
                                    </View>
                                </KeyboardAwareScrollView>
                            </View>
                        </TouchableOpacity>

                    </Modal>

                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(ResetPassword)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.white, flex: 1 },
    splashImage: {
        position: 'absolute',
        right: getWidth(0),
        bottom: getHeight(0)
    },
    mainView: { flex: 1, },
    headerMain: {
        flexDirection: 'row',
        height: hp(5),
        alignItems: 'center',
        paddingHorizontal: wp(5)
    },
    headerImageView: { position: 'absolute', justifyContent: 'center', alignItems: 'center', flex: 1, right: 0, left: 0, zIndex: 0 },
    subView: {
        paddingTop: hp(1),
        marginTop: hp(10)
    },
    formView: {
        marginHorizontal: wp(5),
        alignItems: 'center',
        paddingBottom: hp(2),
    },
    headerText: {
        fontSize: normalize(20),
        fontFamily: Fonts.SemiBold,
        color: color.themeDark,
        textAlign: 'center'
    },
    LabelText: {
        fontSize: normalize(15),
        fontFamily: Fonts.Regular,
        color: color.themegrey,
        marginTop: hp(1),
        marginVertical: hp(3),
        textAlign: 'center'
    },
    modal: {
        width: '100%',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        // flex: 1,
        borderRadius: 25,
        // borderTopRightRadius: 25,
        backgroundColor: color.white,
        alignItems: 'center',
        paddingTop: hp(5),
        paddingHorizontal: wp(5)
    },

})