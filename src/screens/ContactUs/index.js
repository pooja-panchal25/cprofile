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

class ContactUs extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            Subject: '',
            EmailId: '',
            Description: '',
            RoutingName: '',
            pickerShow: false,
            modalVisible: false,
        }
    }


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <BackButton onPress={() => { this.props.navigation.goBack() }} style={{ zIndex: 20 }} />
                        <View style={styles.headerImageView}>
                            <Image resizeMode="contain" source={Icon.IcnReportN} />
                        </View>
                        {/* <TouchableOpacity><Text style={styles.HeaderLabelText}>{strings('Button.Skip')}</Text></TouchableOpacity> */}
                    </View>


                    {/* <Pagination index={4} ContainerStyle={{ marginVertical: hp(3) }} /> */}
                    <KeyboardAwareScrollView style={{ flex: 1, }} bounces={false} enableOnAndroid showsVerticalScrollIndicator={false}>
                        <View style={styles.subView}>
                            <View style={styles.formView}>
                                <Text style={styles.headerText}>{strings('Label.contactUsTitle')}</Text>
                                <Text style={styles.LabelText}>{strings('Label.contactusSubText')}</Text>

                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Subject: changeText })}
                                    value={this.state.Subject}
                                    placeHolder={strings('PlaceHolders.Subject')}
                                    Containerstyle={{ paddingVertical: hp(2) }}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ EmailId: changeText })}
                                    value={this.state.EmailId}
                                    placeHolder={strings('PlaceHolders.EmailId')}
                                    Containerstyle={{ paddingVertical: hp(2) }}
                                />
                                <LabeledInput
                                    onChangeText={(changeText) => this.setState({ Description: changeText })}
                                    value={this.state.Description}
                                    placeHolder={strings('PlaceHolders.Description')}
                                    multiline={true}
                                    numberOfLines={10}
                                    Containerstyle={{ height: 200, paddingVertical: hp(2) }}
                                />

                            </View>
                        </View>
                    </KeyboardAwareScrollView>

                    <ThemeButton
                        onPress={() => {
                            this.setState({ modalVisible: true })
                            this._CountDown()
                        }}
                        buttonText={strings('Button.SubmitButton')}
                        Conrtainerstyle={{ marginHorizontal: wp(5), marginVertical: hp(3) }}
                    />
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(ContactUs)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.gray49, flex: 1 },
    splashImage: {
        position: 'absolute',
        right: getWidth(0),
        bottom: getHeight(0)
    },
    mainView: { flex: 1, },
    headerMain: {
        flexDirection: 'row',
        marginHorizontal: wp(5),
        height: hp(5),
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    HeaderLabelText: {
        fontSize: normalize(15),
        fontFamily: Fonts.Regular,
        color: color.themegrey,
        // marginTop: hp(1),
        // marginVertical: hp(3),
        textAlign: 'center'
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
    labelView: { flex: 1, width: '100%', marginVertical: hp(1) }
})