import React from "react";
import { View, Text, Image, StyleSheet, SafeAreaView } from "react-native";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


import { actionCreators } from '@actions'
import { Images } from "../../assets/Images";
import { Icon } from "../../assets/Icon";
import { getHeight, getWidth } from "../../common/GConstants"
import { color } from "../../common/GColor";


class LanguageSelectedScreen extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Welcome")
        }, 2000);
    }

    render() {
        return (
            <View style={styles.splash}>
                <Image resizeMode='cover' style={styles.splashImage} source={Images.imgSplash} />
                <Image resizeMode='contain' style={styles.appIcon} source={Icon.IcnAppIcon} />
            </View>
        )
    }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(LanguageSelectedScreen)

const styles = StyleSheet.create({
    splash: { alignItems: 'center', justifyContent: 'center', backgroundColor: color.themeColor, flex: 1 },
    appIcon: { position: 'absolute', left: 50, top: 300 },
    splashImage: {
        position: 'absolute',
        right: getWidth(0),
        bottom: getHeight(0)
    }
})