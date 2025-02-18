import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Image, View, Text, Modal, TextInput } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Fonts, FontSize, normalize } from '../../assets/Fonts';
import { CommonStyle } from "../../common/GStyles";
import { color } from '../../common/GColor'
import { Icon } from '../../assets';
import ThemeButton from "../Button/ThemeButton";
import { strings, changeLanguage } from '../../localization/i18n';
import { keyboard_type } from '../../common/GConstants';


const CommentCard = (props) => {
    const {
        isVisible,
        isClose,
        arrReportList,
        selectUser
    } = props

    const _renderItem = (item, index) => (
        <>
            <View
                style={{
                    flexDirection: 'row',
                    width: '100%',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginVertical: hp(0.5)
                }}>
                <Image
                    style={{ width: wp(10), height: wp(10), borderRadius: 50, }}
                    source={item.image}></Image>

                <View
                    style={{ flex: 1, flexDirection: 'column', marginLeft: wp(2) }}>
                    <Text style={{ fontSize: normalize(12), color: color.black, fontFamily: Fonts.Bold }}>{item.name}</Text>

                    <Text style={{ fontSize: normalize(10), marginTop: 2, color: color.viewLineColor, fontFamily: Fonts.Regular, fontStyle: 'italic' }}>{item.subLabel}</Text>


                </View>
                <TouchableOpacity onPress={() => selectUser(item, index)}>
                    {item.isSelected ? <Image resizeMode="contain" source={Icon.IcnTickSquareFill} style={{ width: wp(5), aspectRatio: 1 }} /> : <View style={{ width: 21, height: 21, backgroundColor: color.gray1, borderRadius: 50 }} />}
                </TouchableOpacity>
            </View>
        </>
    )

    return (

        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableOpacity activeOpacity={1}
                onPress={() => isClose()}
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />

            <View style={{ backgroundColor: "rgba(0,0,0,0.5)", justifyContent: 'flex-end' }}>
                <View style={styles.modal}>
                    <KeyboardAwareScrollView
                        enableOnAndroid={true}
                        bounces={false}
                        showsVerticalScrollIndicator={false}
                        style={{ width: "100%" }}
                    >
                        <View style={{ flex: 1, alignItems: 'center', }}>
                            <Text style={styles.headerText}>{strings('Label.MentionUser')}</Text>
                            <View style={{ backgroundColor: color.grey15, flexDirection: 'row', width: "100%", paddingHorizontal: wp(3), paddingVertical: hp(2), borderRadius: 13, marginTop: hp(2) }}>
                                <Image
                                    resizeMode="contain"
                                    style={{ tintColor: color.gray1 }}
                                    source={Icon.IcnSearch}
                                />
                                <TextInput
                                    placeholder={strings('PlaceHolders.SearchUser')}
                                    style={{
                                        ...CommonStyle.textStyle('_16', 'Regular', 'themeBlack'),
                                        marginLeft: wp(2), flex: 1, height: '100%',
                                    }}
                                    placeholderTextColor={color.gray1}
                                />
                            </View>
                            {arrReportList.map((item, index) => _renderItem(item, index))}
                            <ThemeButton
                                onPress={() => isClose()}
                                buttonText={strings('Button.Add')}
                                buttonConrtainerstyle={{ marginTop: hp(2) }}
                            />

                            <ThemeButton
                                onPress={() => isClose()}
                                buttonText={strings('Button.Cancel')}
                                buttonConrtainerstyle={{ backgroundColor: 'transparent' }}
                                keyboardType={keyboard_type.ascii_capable}
                            />
                        </View>
                    </KeyboardAwareScrollView>
                </View>
            </View>

        </Modal>
    )


};



const styles = StyleSheet.create({
    CommentCard: {
        paddingVertical: wp(2),
        backgroundColor: color.white,
        marginVertical: hp(1),
        borderRadius: 10,
        flexDirection: "row"
    },
    modal: {
        width: '100%',
        maxHeight: hp(85),
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        borderRadius: 25,
        backgroundColor: color.white,
        alignItems: 'center',
        paddingHorizontal: wp(5),
        paddingVertical: hp(5)
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
        marginHorizontal: wp(10),
        textAlign: 'center'
    },
})


export default CommentCard;
