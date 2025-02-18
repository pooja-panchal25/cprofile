import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, FlatList } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings, changeLanguage } from '../../localization/i18n';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import moment from "moment";


import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { Icon } from "../../assets/Icon";
import { fontSize, getHeight, getWidth, keyboard_type } from "../../common/GConstants"
import { color } from "../../common/GColor";
import { Fonts, FontSize, normalize } from "../../assets/Fonts";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import BackButton from '../../components/Button/BackButton';
import { NotificationData } from "../../common/CommonData"
import NotificationCard from "../../components/Cards/NotificationCard"
import LabeledInput from "../../components/Input/LabeledInput";
import { Colors } from "react-native/Libraries/NewAppScreen";

class Notification extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrCommentData: NotificationData,
            Comment: ''
        }
    }

    // Life Cycle Method
    componentDidMount() {
        // this.setNavigation()
    }

    _renderComments = () => (
        <View style={{ paddingHorizontal: wp(5), marginVertical: hp(2), flex: 1 }}>
            {this.state.arrCommentData.map((data) =>
                <>
                    <Text style={{ color: Colors.themeBlack, fontSize: FontSize._16, fontFamily: Fonts.Bold }}>{data.day}</Text>
                    {/* <View> */}
                    <FlatList
                        data={data.notifications}
                        keyExtractor={({ index }) => index + "team"}
                        bounces={false}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                        renderItem={({ item, index }) => {
                            console.log("notification iten ==? ", item)
                            return (
                                <NotificationCard
                                    message={item?.message}
                                    username={item?.username}
                                    type={item?.type}
                                    time={item?.time}
                                />
                            )

                        }}
                    />
                    {/* </View> */}
                </>
            )}
        </View>
    )

    _renderItem = () => (
        <View style={{ flexGrow: 1 }}>
            {this._renderComments()}
        </View>
    )

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <Text style={styles.headerText}>{strings('Label.Notifications')}</Text>
                    </View>
                    <KeyboardAwareScrollView style={{ flex: 1, }} contentContainerStyle={{ flex: 1 }} bounces={false} enableOnAndroid showsVerticalScrollIndicator={false}>
                        <FlatList bounces={false} nestedScrollEnabled={true} style={{ flex: 0, flexGrow: 0 }} contentContainerStyle={{ paddingBottom: hp(7), flex: 0, flexGrow: 0 }} data={["1"]} renderItem={() => this._renderItem()} showsVerticalScrollIndicator={false} />
                    </KeyboardAwareScrollView>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(Notification)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.white, flex: 1 },
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
    LiveMainSection: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: wp(5), marginVertical: hp(2) },
    liveheaderSection: { flexDirection: 'row', alignItems: 'center', },
    headerLive: { marginLeft: wp(2), fontSize: FontSize._19, fontFamily: Fonts.Bold, color: color.themeBlack },
    headerSeeAll: { marginLeft: wp(2), fontSize: FontSize._17, fontFamily: Fonts.Regular, color: color.gray60 }

})