import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, TouchableOpacity, Modal, ScrollView } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { strings, changeLanguage } from '../../localization/i18n';
import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { getHeight, getWidth, keyboard_type } from "../../common/GConstants"
import { color } from "../../common/GColor";
import { Fonts, FontSize, normalize } from "../../assets/Fonts";
import { heightPercentageToDP as hp, widthPercentageToDP, widthPercentageToDP as wp } from "react-native-responsive-screen";
import BackButton from '../../components/Button/BackButton';
import Pagination from '../../components/Pagination';
import ThemeButton from '../../components/Button/ThemeButton';

class TypeSelection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            arrUserType: [
                // {
                //     id: 1,
                //     title: strings('Label.NormalProfile'),
                //     subText: strings('Label.NormalProfileSubTitle'),
                //     image: Images.imgNormalUser,
                //     isSelected: true
                // },
                {
                    id: 2,
                    title: strings('Label.ProfessioanlProfile'),
                    subText: strings('Label.ProfessioanlProfileSubTitle'),
                    image: Images.imgProfessionalUser,
                    isSelected: false
                },
                {
                    id: 3,
                    title: strings('Label.BussinessProfile'),
                    subText: strings('Label.BussinessProfileSubTitle'),
                    image: Images.imgNormalUser,
                    isSelected: false
                },
                {
                    id: 4,
                    title: strings('Label.BioData'),
                    subText: strings('Label.BioDataSubTitle'),
                    image: Images.imgProfessionalUser,
                    isSelected: false
                }
            ],
        }
    }

    componentDidMount() {

    }

    _selectedType = (item, index) => {
        let tmpArr = this.state.arrUserType;
        tmpArr.map((data, i) => {
            let tempObj = Object.assign({}, tmpArr[i])
            if (i == index) {
                tempObj["isSelected"] = true
            } else {
                tempObj["isSelected"] = false
            }
            tmpArr[i] = tempObj
        })
        this.setState({ arrUserType: tmpArr })

    }

    _renderItem = (item, index) => (
        <TouchableOpacity onPress={() => this._selectedType(item, index)}
            activeOpacity={1}
            style={{ backgroundColor: color.white, width: "100%", borderRadius: 13, flexDirection: 'row', padding: wp(4), marginVertical: hp(1), alignItems: 'center', borderColor: item.isSelected ? color.themeColor : color.themeColor20, borderWidth: 2 }}>
            <Image resizeMode="contain" source={item.image} style={{ width:widthPercentageToDP(20) , aspectRatio:1}}/>
            <View style={{ flex: 1, marginLeft: wp(3) }}>
                <Text style={styles.TypeText}>{item.title}</Text>
                <Text style={styles.TypeSubText}>{item.subText}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <View style={styles.headerMain}>
                        <BackButton onPress={() => { this.props.navigation.goBack() }} style={{ zIndex: 20 }} />
                    </View>

                    {/* <Pagination index={1} ContainerStyle={{ marginVertical: hp(3) }} /> */}
                    <Pagination index={1} totalCount={[1, 2, 3, 4, 5, 6]} ContainerStyle={{ marginVertical: hp(3) }} isCountHide={false} />
                    <ScrollView bounces={false} showsVerticalScrollIndicator={false} >
                        <View style={styles.subView}>
                            <View style={styles.formView}>
                                <Text style={styles.headerText}>{strings('Label.WhoAreYouTitle')}</Text>
                                <Text style={styles.LabelText}>{strings('Label.ChooseUserType')}</Text>

                                {this.state.arrUserType.map((item, index) => this._renderItem(item, index))}

                            </View>
                        </View>
                    </ScrollView>

                    <ThemeButton
                        onPress={() => this.props.navigation.navigate('CreateAccount')}
                        buttonText={strings('Button.Next')}
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
export default connect(mapStatetoProps, mapDispatchToProps)(TypeSelection)

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
        alignItems: 'center'
    },
    headerImageView: { position: 'absolute', justifyContent: 'center', alignItems: 'center', flex: 1, right: 0, left: 0, zIndex: 0 },
    subView: {
        paddingTop: hp(1),
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
    TypeText: {
        fontSize: normalize(18),
        fontFamily: Fonts.SemiBold,
        color: color.themeBlack,
    },
    TypeSubText: {
        fontSize: normalize(13),
        fontFamily: Fonts.Regular,
        color: color.gray1,
    }

})