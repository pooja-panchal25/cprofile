import React, { useRef } from 'react';
import { ImageBackground, StyleSheet, TouchableOpacity, Image, View, Text } from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { Fonts, FontSize } from '../../assets/Fonts';
import { color } from '../../common/GColor'
import { Icon } from '../../assets';


const NotificationCard = (props) => {
    const {
        index, time, type, message, username
    } = props

    return (
        <View style={styles.CommentCard}>
            <View style={{ backgroundColor: "#D3FEFD", width: wp(12), height: wp(12), alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}><Image source={Icon.IcnNotification} resizeMode="contain" style={styles.profileImage} /></View>
            <View style={styles.commentTextMainView}>
                <View style={styles.commentProfileView}>
                    <Text style={styles.profileNameText}>{username}< Text style={{ color: color.gray1, fontSize: FontSize._16, fontFamily: Fonts.Regular }}> {message}</Text></Text>
                </View>
                <Text style={styles.commentText}>{time}</Text>
                {type == "followRequest" &&
                    <View style={styles.actionView}>
                        <TouchableOpacity style={styles.commonButton}><Text style={{ color: color.themeBlack, fontFamily: Fonts.Regular, fontSize: FontSize._14, }}>Add</Text></TouchableOpacity>
                        <TouchableOpacity style={[styles.commonButton, { backgroundColor: color.themeBlack, marginLeft: wp(3) }]}><Text style={{ color: color.white, fontFamily: Fonts.Regular, fontSize: FontSize._14, }}>Cancel</Text></TouchableOpacity>
                    </View>}
            </View>
        </View>
    )


};



const styles = StyleSheet.create({
    CommentCard: {
        paddingVertical: wp(5),
        paddingHorizontal: wp(5),
        backgroundColor: color.white,
        marginVertical: hp(0.5),
        borderRadius: 10,
        flexDirection: "row",
        backgroundColor: '#7E879F05'
    },
    profileImage: {
        // width: wp(10),
        // height: wp(10)
    },
    commentTextMainView: { flex: 1, marginLeft: wp(3) },
    commentProfileView: { flexDirection: "row", justifyContent: 'space-between' },
    profileNameText: { fontSize: FontSize._16, fontFamily: Fonts.SemiBold, color: color.themeBlack, },
    createdAtText: { fontSize: FontSize._16, fontFamily: Fonts.Regular, color: color.gray1, },
    commentText: { marginTop: hp(1), fontSize: FontSize._16, fontFamily: Fonts.Regular, color: color.gray1 },
    actionView: { flexDirection: 'row' },
    commonButton: { backgroundColor: color.themeColor, paddingHorizontal: wp(5), marginTop: hp(1), alignItems: 'center', justifyContent: 'center', borderRadius: 50, paddingVertical: hp(1) }
})


export default NotificationCard;
