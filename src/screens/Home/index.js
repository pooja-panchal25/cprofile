import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView, } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { actionCreators } from '@actions'
import { Icon } from "../../assets/Icon";
import { color } from "../../common/GColor";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";


class Home extends React.Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    // Life Cycle Method
    componentDidMount() {
        this.setNavigation()
    }

    // Custome Methods
    setNavigation = () => {
        // Header navigation setup
        this.props.navigation.setOptions({
            headerShown: true,
            headerLeft: () => (
                <Image resizeMode='contain' source={Icon.IcnReportN} style={{ marginLeft: wp(5) }} />
            ),
            // headerRight: () => (
            //     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            //         <TouchableOpacity activeOpacity={0.6} style={{ backgroundColor: color.Red, paddingHorizontal: wp(5), paddingVertical: hp(0.5), borderRadius: 20, }}>
            //             <Text style={{ color: color.white, fontFamily: Fonts.SemiBold, fontSize: FontSize._16 }}>{strings('Button.Live')}</Text>
            //         </TouchableOpacity>
            //         <TouchableOpacity style={{ marginHorizontal: wp(2) }}>
            //             <Image resizeMode="contain" source={Icon.IcnVideocircle} />
            //         </TouchableOpacity>
            //         <TouchableOpacity style={{ marginRight: wp(5) }}>
            //             <Image resizeMode="contain" source={Icon.IcnChat} />
            //         </TouchableOpacity>
            //     </View>
            // ),
            title: '',
            headerShadowVisible: false // Use to hide shadow under the navigation bar
        })
        // ========================================================================
    }


    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <Text>hbjhdsv sdgfjghg</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(Home)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.white, flex: 1 },
    mainView: { flex: 1, },

})