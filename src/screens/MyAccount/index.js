import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, FlatList, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings, changeLanguage } from '../../localization/i18n';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import CountryPicker, { Flag } from "react-native-country-picker-modal";
import moment from "moment";
import Tooltip from 'react-native-walkthrough-tooltip';

import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { Icon } from "../../assets/Icon";
import { getHeight, getWidth, keyboard_type } from "../../common/GConstants"
import { color } from "../../common/GColor";
import { Fonts, FontSize, normalize } from "../../assets/Fonts";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { LivaData, PostData, Schedules } from "../../common/CommonData"
import ThemeButton from '../../components/Button/ThemeButton';

class MyAccount extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bankName: '',
            AccountNumber: '',
            HolderName: '',
            RoutingName: '',
            pickerShow: false,
            modalVisible: false,
            arrPostData: PostData,
            arrLiveList: LivaData,
            arrScheduleList: Schedules,
            selectedTab: 'Post',
            toolTipVisible: false
        }
    }

    componentDidUpdate() {
    }


    _renderProfileView = () => (
        <>
            <View style={styles.ProfileMainView}>
                <View style={{ flexDirection: 'row', }}>
                    <View style={styles.profileImageView}>
                        <Image resizeMode="contain" source={Images.imgAccountProfile} style={styles.profileImage} />
                        <Image resizeMode="contain" style={styles.verifyImage} source={Icon.IcnVerify} />
                    </View>
                    <View style={{ flex: 1, marginLeft: wp(2) }}>
                        <View style={{ flex: 1 }}>
                            <Text style={styles.profileName}>Jessica Roy</Text>
                            <Text style={styles.userName}>@jess123</Text>
                        </View>
                        <View style={styles.followrsMainView}>
                            <View>
                                <Text style={styles.followersText}>124</Text>
                                <Text style={styles.followerTitle}>Followers</Text>
                            </View>
                            <View>
                                <Text style={styles.followersText}>124</Text>
                                <Text style={styles.followerTitle}>Following</Text>
                            </View>
                            <View>
                                <Text style={styles.followersText}>124</Text>
                                <Text style={styles.followerTitle}>Post</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.aboutText}>It is a long established fact that a reader will be distracted by the readable content.It is a long established fact that a reader</Text>
                <Text style={styles.affilliateText}>Affiliates with <Text style={styles.affilliatesSubText}> It is a long established fact that a reader </Text></Text>
                <View style={styles.buttonMainView}>
                    <ThemeButton buttonText={strings('Button.EditProfile')} Conrtainerstyle={{ flex: 1, marginRight: wp(5) }} isLeftIcon={true} leftIcon={Icon.IcnEditProfile} onPress={() => this.props.navigation.navigate('EditProfile')} />
                    {/* <ThemeButton buttonText={strings('Button.Subscribe')} Conrtainerstyle={{ flex: 1, marginHorizontal: wp(2), }} isLeftIcon={true} leftIcon={Icon.IcnBell} buttonConrtainerstyle={{ backgroundColor: color.themeBlack }} textStyle={{ color: color.white }} imageStyle={{ tintColor: color.white }} onPress={() => console.log("dfjkds")} /> */}
                    <TouchableOpacity
                        style={{ alignItems: 'center', justifyContent: 'center', backgroundColor: color.gray15, padding: hp(1.5), borderRadius: 30 }}
                    >
                        <Image style={{}} resizeMode='contain' source={Icon.IcnChat} />

                    </TouchableOpacity>
                </View>
                <View style={styles.socialMediaMain}>
                    <Text style={styles.socialtext}>Social Media</Text>
                    <View style={styles.socialImagesMain}>
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnYoutube} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnTiktok} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnFacebook} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnTwitter} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnRedit} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnInstagram} />
                        <Image resizeMode="contain" style={styles.socialImage} source={Icon.IcnDiscord} />
                    </View>
                </View>
            </View>
        </>
    )


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <Text style={styles.headerText}>{strings('Label.Account')}</Text>
                    </View>
                    <ScrollView
                        bounces={false}
                        nestedScrollEnabled={true}
                        contentContainerStyle={{ paddingBottom: hp(7), }}
                        stickyHeaderIndices={[1]}
                    >
                        {this._renderProfileView()}
                        <View style={{ flex: 1, paddingVertical: hp(2), backgroundColor: color.white }}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => this.setState({ selectedTab: 'Post' })} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image resizeMode="contain" style={{ marginHorizontal: wp(3) }} source={this.state.selectedTab == "Post" ? Icon.IcnActiveCamera : Icon.IcnCamera} />
                                    <Text style={{ fontSize: FontSize._15, fontFamily: Fonts.Regular, color: this.state.selectedTab == "Post" ? color.themeBlack : color.gray1 }}>{strings("Button.Post")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ selectedTab: 'Schedule' })} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image resizeMode="contain" style={{ marginHorizontal: wp(3), tintColor: this.state.selectedTab == "Schedule" ? null : color.gray1 }} source={this.state.selectedTab == "Schedule" ? Icon.IcnActiveCalender : Icon.IcncalendarGray} />
                                    <Text style={{ fontSize: FontSize._15, fontFamily: Fonts.Regular, color: this.state.selectedTab == "Schedule" ? color.themeBlack : color.gray1 }}>{strings("Button.Schedule")}</Text>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => this.setState({ selectedTab: 'Live' })} style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image resizeMode="contain" style={{ marginHorizontal: wp(3) }} source={this.state.selectedTab == "Live" ? Icon.IcnActiveVideo : Icon.IcnVideoOutline} />
                                    <Text style={{ fontSize: FontSize._15, fontFamily: Fonts.Regular, color: this.state.selectedTab == "Live" ? color.themeBlack : color.gray1 }}>{strings("Button.Live")}{"(14)"}</Text>
                                </TouchableOpacity>
                            </View>

                        </View>
                    </ScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(MyAccount)

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
    ImageInner: { backgroundColor: color.gray30, borderRadius: 100, width: '100%', height: "100%", alignItems: 'center', justifyContent: 'center' },
    ProfileMainView: { paddingHorizontal: wp(5), marginTop: hp(2), flex: 1, borderBottomColor: color.gray30, borderBottomWidth: 1, paddingBottom: hp(2) },
    profileImageView: { borderRadius: 100, borderColor: "#EBEBEB", borderWidth: 2, width: wp(28), height: wp(28), alignItems: 'center', justifyContent: 'center' },
    verifyImage: { position: 'absolute', bottom: hp(1), right: wp(1), width: wp(6), height: wp(6) },
    profileImage: { width: wp(27), height: wp(27) },
    profileName: { color: color.themeBlack, fontFamily: Fonts.Bold, fontSize: FontSize._18, marginVertical: hp(0.5) },
    userName: { color: color.gray1, fontFamily: Fonts.Regular, fontSize: FontSize._14 },
    followrsMainView: { flexDirection: 'row', flex: 1, justifyContent: 'space-between', alignItems: 'flex-end' },
    followersText: { color: color.themeBlack, fontFamily: Fonts.Bold, fontSize: FontSize._16 },
    followerTitle: { color: color.gray1, fontFamily: Fonts.Regular, fontSize: FontSize._16 },
    aboutText: { color: color.themeBlack, fontFamily: Fonts.Regular, fontSize: FontSize._15, marginTop: hp(3) },
    affilliateText: { color: color.themeBlack, fontFamily: Fonts.Regular, fontSize: FontSize._13, fontWeight: '500', marginVertical: hp(1) },
    affilliatesSubText: { color: color.gray1, fontFamily: Fonts.Regular, fontSize: FontSize._13 },
    buttonMainView: { flex: 1, flexDirection: 'row', marginVertical: hp(2) },
    socialMediaMain: { flexDirection: 'row', justifyContent: 'space-between' },
    socialtext: { color: color.themeBlack, fontWeight: '500', fontSize: FontSize._14, fontFamily: Fonts.Regular },
    socialImagesMain: { flexDirection: 'row', flex: 0.8, justifyContent: 'space-between' },
    socialImage: { width: wp(6), height: wp(6) }

})