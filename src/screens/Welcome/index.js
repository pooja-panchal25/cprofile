import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper';
import {strings, changeLanguage} from '../../localization/i18n';

import {actionCreators} from '@actions';
import {Images} from '../../assets/Images';
import {Icon} from '../../assets/Icon';
import {getHeight, getWidth} from '../../common/GConstants';
import {color} from '../../common/GColor';
import {Fonts, FontSize, normalize} from '../../assets/Fonts';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import ThemeButton from '../../components/Button/ThemeButton';

class SplashScreen extends React.Component {
  componentDidMount() {}

  render() {
    return (
      <View style={styles.mainView}>
        <ImageBackground
          source={Images.imgwelcomeBackground}
          resizeMode={'cover'}
          imageStyle={{borderRadius: 10}}
          style={styles.cardBackgroud}>
          <LinearGradient
            colors={[
              'rgba(0, 0, 0, 0.7)',
              'rgba(0, 0, 0, 0.9)',
              'rgba(0, 0, 0, 1)',
            ]}
            style={{flex: 1, alignItems: 'center',}}>
            <Image resizeMode="contain" source={Images.imgWelcomeImage} style={{opacity:0.3}} />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: heightPercentageToDP(8),
              }}></View>
            <View style={styles.slide1}>
              <Text style={styles.text}>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry{' '}
                <Text style={{color: color.themeColor}}>Lorem Ipsum is simply dummy text.</Text>
              </Text>
            </View>
            <ThemeButton
              onPress={() => this.props.navigation.navigate('TypeSelection')}
              buttonText={strings('Button.CreateAnAccount')}
              Conrtainerstyle={{
                marginHorizontal: widthPercentageToDP(10),
                marginVertical: heightPercentageToDP(3),
              }}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom:heightPercentageToDP(2)
              }}>
              <Text
                style={{
                  color: color.white,
                  fontFamily: Fonts.Regular,
                  fontSize: FontSize._15,
                }}>
                Already have an account?
              </Text>
              <TouchableOpacity
                onPress={() => this.props.navigation.navigate('Login')}>
                <Text
                  style={{
                    color: color.themeColor,
                    fontFamily: Fonts.Regular,
                    fontSize: FontSize._15,
                  }}>
                  {' '}
                  Login
                </Text>
              </TouchableOpacity>
            </View>
          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}
const mapStatetoProps = state => {
  return {};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(SplashScreen);

const styles = StyleSheet.create({
  Container: {backgroundColor: color.white, flex: 1},
  appIcon: {position: 'absolute', left: 50, top: 300},
  splashImage: {
    position: 'absolute',
    right: getWidth(0),
    bottom: getHeight(0),
  },
  mainView: {flex: 1},
  HeaderLabel: {
    fontSize: normalize(20),
    fontFamily: Fonts.Regular,
  },
  cardBackgroud: {
    width: '100%',
    height: '100%',
  },
  wrapper: {
    height: heightPercentageToDP(15),
    marginTop: heightPercentageToDP(2),
  },
  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // backgroundColor:'green',
    paddingHorizontal: widthPercentageToDP(8),
  },
  text: {
    fontSize: normalize(25),
    color: color.white,
    fontFamily: Fonts.Bold,
    textAlign: 'center',
  },
});
