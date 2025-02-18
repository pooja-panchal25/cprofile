import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { Icon } from "../../assets/Icon";
import { getHeight, getWidth } from "../../common/GConstants"
import { color } from "../../common/GColor";
import { Fonts, FontSize, normalize } from "../../assets/Fonts";


class SplashScreen extends React.Component {

    componentDidMount() {
        
    }

    render() {
        return (
            <SafeAreaView style={styles.Container}>
                <View style={styles.mainView}>
                    <Text style={styles.HeaderLabel}>Language</Text>
                </View>
            </SafeAreaView>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(SplashScreen)

const styles = StyleSheet.create({
    Container: { backgroundColor: color.white, flex: 1 },
    appIcon: { position: 'absolute', left: 50, top: 300 },
    splashImage: {
        position: 'absolute',
        right: getWidth(0),
        bottom: getHeight(0)
    },
    mainView: { flex: 1 },
    HeaderLabel: {
        fontSize:normalize(20),
        fontFamily:Fonts.Regular
    }
})