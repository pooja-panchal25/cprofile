import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Image, View, Text, Modal, TextInput, FlatList } from 'react-native';
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Fonts, FontSize, normalize } from '../../assets/Fonts';
import { CommonStyle } from "../../common/GStyles";
import { color } from '../../common/GColor'
import { Icon } from '../../assets';
import ThemeButton from "../Button/ThemeButton";
import { strings, changeLanguage } from '../../localization/i18n';
import { keyboard_type } from '../../common/GConstants';
import ExploreCategoryCard from "../../components/Cards/ExploreCategoryCard";


const CommentCard = (props) => {
    const {
        isVisible,
        isClose,
        arrExploreCategory,
        selecteCategory
    } = props

    return (

        <Modal animationType="slide" transparent={true} visible={isVisible}>
            <TouchableOpacity activeOpacity={1}
                onPress={() => isClose()}
                style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.5)" }} />

            <View style={{ backgroundColor: "rgba(0,0,0,0.5)", justifyContent: 'flex-end' }}>
                <View style={styles.modal}>

                    <View style={{ alignItems: 'center', }}>
                        <Text style={styles.headerText}>{strings('Label.SelectCategory')}</Text>
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
                        <KeyboardAwareScrollView
                            enableOnAndroid={true}
                            bounces={false}
                            showsVerticalScrollIndicator={false}
                            style={{ width: "100%" }}
                        >
                            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                                {/* {arrReportList.map((item, index) => _renderItem(item, index))} */}
                                <FlatList
                                    data={arrExploreCategory}
                                    keyExtractor={({ index }) => index + "team"}
                                    bounces={false}
                                    ItemSeparatorComponent={<View
                                        style={{
                                            height: wp(2),
                                        }}
                                    />}
                                    style={{ paddingTop: hp(3) }}
                                    numColumns={4}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <ExploreCategoryCard index={index} background={item.image} Name={item.Name} isSelected={item.isSelected} containerstyle={{ width: wp(21), marginRight: index % 4 == 3 ? wp(0) : wp(2), height: hp(12) }} onPress={() => selecteCategory(item, index)} textStyle={styles.categoryName} />
                                        )
                                    }}
                                />
                            </View>
                        </KeyboardAwareScrollView>
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
    categoryName: { color: color.white, fontFamily: Fonts.SemiBold, fontSize: FontSize._10, textAlign: 'center' }
})


export default CommentCard;
