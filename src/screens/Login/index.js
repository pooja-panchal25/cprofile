import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {strings, changeLanguage} from '../../localization/i18n';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import {CommonActions} from '@react-navigation/native';

import {actionCreators} from '@actions';
import {Images} from '../../assets/Images';
import {Icon} from '../../assets/Icon';
import {getHeight, getWidth, keyboard_type} from '../../common/GConstants';
import {color} from '../../common/GColor';
import {Fonts, FontSize, normalize} from '../../assets/Fonts';
import {
  heightPercentageToDP,
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackButton from '../../components/Button/BackButton';
import ThemeButton from '../../components/Button/ThemeButton';
import LabeledInput from '../../components/Input/LabeledInput';
import NumberInput from '../../components/Input/NumberInput';

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      mobileNumber: '',
      countryName: '',
      countryCode: '91',
      countryFlag: '',
      pickerShow: false,
      secureTextEntry: true,
      modalVisible: false,
      email: '',
    };
  }

  componentDidMount() {
    // changeLanguage("en")
  }

  render() {
    return (
      <SafeAreaView style={styles.Container}>
        <View style={styles.mainView}>
          <View style={styles.headerMain}>
            <BackButton
              onPress={() => {
                this.props.navigation.goBack();
              }}
              style={{zIndex: 20}}
            />
            <View style={styles.headerImageView}>
              <Image resizeMode="contain" source={Icon.IcnReportN} />
            </View>
          </View>
          <KeyboardAwareScrollView
            style={{flex: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.subView}>
              <Image
                resizeMode="stretch"
                source={Images.imgLoginVecotor}
                style={{width: wp(100)}}
              />
              <View style={styles.formView}>
                <Text style={styles.headerText}>
                  {strings('Label.loginTitle')}
                </Text>
                <Text style={styles.LabelText}>
                  {strings('Label.loginSubTtile')}
                </Text>
                <NumberInput
                  onChangeText={changeText =>
                    this.setState({mobileNumber: changeText})
                  }
                  OnPressCountryCode={() => this.setState({pickerShow: true})}
                  countryCode={this.state.countryCode}
                  label={'Full name'}
                  secureTextEntry={this.state.secureTextEntry}
                  value={this.state.mobileNumber}
                  maxlength={12}
                  keyboardtype={keyboard_type.numeric}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({password: changeText})
                  }
                  value={this.state.password}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnLock}
                  isRightIcon={true}
                  rightIcon={Icon.IcnEyeBlank}
                  rightIconPress={() =>
                    this.setState({
                      secureTextEntry: !this.state.secureTextEntry,
                    })
                  }
                  secureTextEntry={this.state.secureTextEntry}
                  inputstyle={{letterSpacing: 5}}
                />
                <ThemeButton
                  onPress={() =>
                    this.props.navigation.dispatch(
                      CommonActions.reset({
                        index: 0,
                        routes: [{name: 'BottomTab'}],
                      }),
                    )
                  }
                  buttonText={strings('Button.LoginButtonTitle')}
                  buttonConrtainerstyle={{marginTop: hp(2)}}
                />
                <TouchableOpacity
                  onPress={() => this.setState({modalVisible: true})}
                  style={{marginTop: hp(2)}}>
                  <Text
                    style={{
                      fontFamily: Fonts.Regular,
                      fontSize: FontSize._16,
                      textTransform: 'capitalize',
                    }}>
                    {strings('Label.ForgotLabel')}
                  </Text>
                </TouchableOpacity>

                {this.state.pickerShow && (
                  <CountryPicker
                    withAlphaFilter
                    withFilter
                    withFlag
                    withCallingCode
                    onSelect={country => {
                      this.setState({
                        countryName: country.name,
                        countryCode: country.callingCode[0],
                        countryFlag: country.cca2,
                      });
                    }}
                    onClose={() => this.setState({pickerShow: false})}
                    visible
                    withCountryNameButton
                  />
                )}
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: heightPercentageToDP(2),
                  }}>
                  <Text
                    style={{
                      color: color.black70,
                      fontFamily: Fonts.Regular,
                      fontSize: normalize(14),
                    }}>
                    Already have an account?
                  </Text>
                  <TouchableOpacity
                    onPress={() =>
                      this.props.navigation.navigate('TypeSelection')
                    }>
                    <Text
                      style={{
                        color: color.themeColor,
                        fontFamily: Fonts.Regular,
                        fontSize: normalize(16),
                      }}>
                      {' '}
                      Create Account
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </KeyboardAwareScrollView>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={this.state.modalVisible}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => this.setState({modalVisible: false})}
            style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          />

          <View style={{flex: 0.8, backgroundColor: 'rgba(0,0,0,0.5)'}}>
            <View style={styles.modal}>
              <KeyboardAwareScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, alignItems: 'center' }}>
                  <Text style={styles.headerText}>{'Forgot Password'}</Text>
                  <Text
                    style={[
                      styles.LabelText,
                      {textAlign: 'center', marginHorizontal: wp(15)},
                    ]}>
                    {'Please enter your email address to reset your password.'}
                  </Text>

                  <LabeledInput
                    onChangeText={changeText =>
                      this.setState({email: changeText})
                    }
                    value={this.state.email}
                    isLeftIcon={true}
                    leftIcon={Icon.IcnLock}
                    placeHolder={strings('PlaceHolders.Email')}
                    keyboardtype={keyboard_type.email}
                  />
                  <ThemeButton
                    onPress={() => {
                      this.setState({modalVisible: false});
                      this.props.navigation.navigate('ResetPassword');
                    }}
                    buttonText={strings('Button.SubmitButton')}
                    buttonConrtainerstyle={{marginTop: hp(2)}}
                  />
                  <TouchableOpacity
                    onPress={() => this.setState({modalVisible: false})}
                    style={{marginVertical: hp(2)}}>
                    <Text
                      style={{
                        fontFamily: Fonts.Regular,
                        fontSize: FontSize._16,
                      }}>
                      {'Back to login'}
                    </Text>
                  </TouchableOpacity>
                </View>
              </KeyboardAwareScrollView>
            </View>
          </View>
        </Modal>
      </SafeAreaView>
    );
  }
}
const mapStatetoProps = state => {
  return {};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(LoginScreen);

const styles = StyleSheet.create({
  Container: {backgroundColor: color.white, flex: 1},
  splashImage: {
    position: 'absolute',
    right: getWidth(0),
    bottom: getHeight(0),
  },
  mainView: {flex: 1},
  headerMain: {
    flexDirection: 'row',
    height: hp(5),
    alignItems: 'center',
    paddingHorizontal: wp(5),
  },
  headerImageView: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    right: 0,
    left: 0,
    zIndex: 0,
  },
  subView: {
    paddingTop: hp(1),
    flex: 1,
  },
  formView: {
    marginHorizontal: wp(5),
    alignItems: 'center',
    flex: 1,
    paddingBottom: hp(2),
    // backgroundColor:'green'
  },
  headerText: {
    fontSize: normalize(20),
    fontFamily: Fonts.SemiBold,
    color: color.themeDark,
  },
  LabelText: {
    fontSize: normalize(15),
    fontFamily: Fonts.Regular,
    color: color.themegrey,
    marginTop: hp(1),
    marginVertical: hp(3),
  },
  modal: {
    width: '100%',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: color.white,
    alignItems: 'center',
    paddingTop: hp(5),
    paddingHorizontal: wp(4),
  },
});
