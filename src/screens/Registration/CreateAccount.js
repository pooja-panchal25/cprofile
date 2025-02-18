import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  Modal,
  TextInput,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {strings, changeLanguage} from '../../localization/i18n';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import moment from 'moment';

import {actionCreators} from '@actions';
import {Images} from '../../assets/Images';
import {Icon} from '../../assets/Icon';
import {getHeight, getWidth, keyboard_type} from '../../common/GConstants';
import {color} from '../../common/GColor';
import {Fonts, FontSize, normalize} from '../../assets/Fonts';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import BackButton from '../../components/Button/BackButton';
import Pagination from '../../components/Pagination';
import ThemeButton from '../../components/Button/ThemeButton';
import NumberInput from '../../components/Input/NumberInput';
import LabeledInput from '../../components/Input/LabeledInput';
import {CommonStyle} from '../../common/GStyles';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mobileNumber: '',
      countryName: '',
      countryCode: '91',
      countryFlag: '',
      passWord: '',
      confPassword: '',
      secureTextEntryPass: true,
      secureTextEntryConfPass: true,
      pickerShow: false,
      modalVisible: false,
      email: '',
      timer: 10,
      otp1: '',
      otp2: '',
      otp3: '',
      otp4: '',
      isChecked: false,
    };
  }

  _CountDown() {
    this.interval = setInterval(
      () => this.setState(prevState => ({timer: prevState.timer - 1})),
      1000,
    );
    if (this.state.timer == 0) {
      clearInterval(this.interval);
    }
  }

  componentDidUpdate() {
    if (this.state.timer <= 0) {
      clearInterval(this.interval);
    }
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _selectedType = (item, index) => {
    let tmpArr = this.state.arrUserType;
    tmpArr.map((data, i) => {
      let tempObj = Object.assign({}, tmpArr[i]);
      if (i == index) {
        tempObj['isSelected'] = true;
      } else {
        tempObj['isSelected'] = false;
      }
      tmpArr[i] = tempObj;
    });
    this.setState({arrUserType: tmpArr});
  };

  _renderNote = () => (
    <View
      style={{marginTop: hp(3), flexDirection: 'row', marginHorizontal: wp(5)}}>
      <TouchableOpacity
        onPress={() => this.setState({isChecked: !this.state.isChecked})}>
        <Image
          source={
            !this.state.isChecked ? Icon.IcnTickSquareFill : Icon.IcnTickBlank
          }
          style={{width: wp(5), height: wp(5), marginTop: 5}}
        />
      </TouchableOpacity>
      <Text style={styles.agreeText}>
        {strings.agreeWith}
        {strings('Label.AgreeText')}
        <Text style={styles.textDecoration}>
          {` ${strings('Label.TermsServices')} `}
        </Text>
        {strings('Label.And')}
        <Text
          style={styles.textDecoration}
          // onPress={() => this.onHandleNavigateToScreen('PrivacyPolicy')}
        >
          {` ${strings('Label.PrivacyPolicy')}`}
        </Text>
        .
      </Text>
    </View>
  );

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
          </View>

          <Pagination
            index={2}
            totalCount={[1, 2, 3, 4, 5, 6]}
            ContainerStyle={{marginVertical: hp(3)}}
            isCountHide={false}
          />
          <KeyboardAwareScrollView
            style={{flex: 1}}
            bounces={false}
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={styles.subView}>
              <View style={styles.formView}>
                <Text style={styles.headerText}>
                  {strings('Label.CreateAccount')}
                </Text>
                <Text style={styles.LabelText}>
                  {strings('Label.CreateAccountSubTitle')}
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
                <NumberInput
                  onChangeText={changeText =>
                    this.setState({mobileNumber: changeText})
                  }
                  OnPressCountryCode={() => this.setState({pickerShow: true})}
                  countryCode={this.state.countryCode}
                  value={this.state.mobileNumber}
                  maxlength={12}
                  keyboardtype={keyboard_type.numeric}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({passWord: changeText})
                  }
                  value={this.state.passWord}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnLock}
                  isRightIcon={true}
                  rightIcon={
                    this.state.passWord ? Icon.IcnEyeBlank : Icon.IcnEyeBlank
                  }
                  rightIconPress={() =>
                    this.setState({
                      secureTextEntryPass: !this.state.secureTextEntryPass,
                    })
                  }
                  secureTextEntry={this.state.secureTextEntryPass}
                  placeHolder={strings('PlaceHolders.NewPassword')}
                  inputstyle={{color: color.themegrey}}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({confPassword: changeText})
                  }
                  value={this.state.confPassword}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnLock}
                  isRightIcon={true}
                  rightIcon={
                    this.state.confPassword ? Icon.IcnEyeBlank : Icon.IcnEyeBlank
                  }
                  rightIconPress={() =>
                    this.setState({
                      secureTextEntryConfPass:
                        !this.state.secureTextEntryConfPass,
                    })
                  }
                  secureTextEntry={this.state.secureTextEntryConfPass}
                  placeHolder={strings('PlaceHolders.ConfirmPassword')}
                  inputstyle={{color: color.themegrey}}
                />
              </View>
            </View>
            {this._renderNote()}
            <ThemeButton
              onPress={() => {
                this.setState({modalVisible: true});
                this._CountDown();
              }}
              buttonText={strings('Button.Create')}
              Conrtainerstyle={{
                marginHorizontal: wp(5),
                marginVertical: hp(3),
              }}
            />
          </KeyboardAwareScrollView>
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

          <Modal
            animationType="slide"
            transparent={true}
            visible={this.state.modalVisible}>
            <View
              style={{
                flex: 1,
                backgroundColor: 'rgba(0,0,0,0.5)',
                justifyContent: 'flex-end',
              }}>
              <View style={styles.modal}>
                <KeyboardAwareScrollView
                  bounces={false}
                  showsVerticalScrollIndicator={false}>
                  <View style={{flex: 1, alignItems: 'center'}}>
                    <Text style={styles.headerText}>
                      {strings('Label.VerifyNumber')}
                    </Text>
                    <Text
                      style={[
                        styles.LabelText,
                        {textAlign: 'center', marginHorizontal: wp(5)},
                      ]}>
                      {strings('Label.EnterFourDigit')}
                    </Text>
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={styles.phoneNo}>{`+${
                        this.state.countryCode + ' - ' + this.state.mobileNumber
                      }`}</Text>
                      <TouchableOpacity
                        style={{marginStart: wp(3)}}
                        onPress={() => {}}>
                        <Image
                          resizeMode="contain"
                          style={styles.imageEditPhone}
                          source={Icon.IcnEdit}
                        />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        marginTop: hp(4),
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <View
                        style={[
                          styles.inputContainer(this.state.otp1.length == 0),
                          {},
                        ]}>
                        <TextInput
                          ref={input => {
                            this.firstTextInput = input;
                          }}
                          keyboardType={'number-pad'}
                          autoFocus={true}
                          maxLength={1}
                          placeholder="•"
                          placeholderTextColor={color.themeBlack}
                          secureTextEntry={true}
                          cursorColor={color.gray15}
                          style={styles.otpInputText}
                          onChangeText={text => {
                            this.setState(
                              {otp1: text, errorText: ''},
                              () =>
                                this.state.otp1.length > 0 &&
                                this.secondTextInput.focus(),
                            );
                          }}></TextInput>
                      </View>

                      <View
                        style={[
                          styles.inputContainer(this.state.otp2.length == 0),
                          {marginStart: wp(4)},
                        ]}>
                        <TextInput
                          onChangeText={text => {
                            this.setState({otp2: text, errorText: ''}, () =>
                              this.state.otp2.length > 0
                                ? this.thirdTextInput.focus()
                                : this.firstTextInput.focus(),
                            );
                          }}
                          keyboardType={'number-pad'}
                          ref={input => {
                            this.secondTextInput = input;
                          }}
                          placeholder="•"
                          placeholderTextColor={color.themeBlack}
                          maxLength={1}
                          cursorColor={color.gray15}
                          secureTextEntry={true}
                          style={[styles.otpInputText]}></TextInput>
                      </View>

                      <View
                        style={[
                          styles.inputContainer(this.state.otp3.length == 0),
                          {marginStart: wp(4)},
                        ]}>
                        <TextInput
                          keyboardType={'number-pad'}
                          onChangeText={text => {
                            this.setState({otp3: text, errorText: ''}, () =>
                              this.state.otp3.length > 0
                                ? this.fourthTextInput.focus()
                                : this.secondTextInput.focus(),
                            );
                          }}
                          ref={input => {
                            this.thirdTextInput = input;
                          }}
                          placeholder="•"
                          placeholderTextColor={color.themeBlack}
                          maxLength={1}
                          cursorColor={color.gray15}
                          secureTextEntry={true}
                          style={styles.otpInputText}></TextInput>
                      </View>

                      <View
                        style={[
                          styles.inputContainer(this.state.otp4.length == 0),
                          {marginStart: wp(4)},
                        ]}>
                        <TextInput
                          onChangeText={text => {
                            this.setState({otp4: text, errorText: ''}, () => {
                              this.state.otp4.length == 0 &&
                                this.thirdTextInput.focus();
                            });
                          }}
                          keyboardType={'number-pad'}
                          ref={input => {
                            this.fourthTextInput = input;
                          }}
                          placeholder="•"
                          placeholderTextColor={color.themeBlack}
                          maxLength={1}
                          cursorColor={color.gray15}
                          secureTextEntry={true}
                          style={styles.otpInputText}></TextInput>
                      </View>
                    </View>
                    <View
                      onPress={() => this.setState({modalVisible: false})}
                      style={{marginTop: hp(2)}}>
                      <Text
                        style={{
                          fontFamily: Fonts.Regular,
                          fontSize: FontSize._16,
                          color: color.gray1,
                        }}>
                        {strings('Label.ResendCodeIn')}{' '}
                        <Text
                          style={{
                            fontFamily: Fonts.SemiBold,
                            fontSize: FontSize._16,
                            color: color.themeBlack,
                          }}>
                          00:{this.state.timer}
                        </Text>{' '}
                      </Text>
                    </View>
                    <ThemeButton
                      onPress={() => {
                        this.setState({modalVisible: false});
                        this.props.navigation.navigate('PersnoalInfo');
                      }}
                      buttonText={strings('Button.Verify')}
                      buttonConrtainerstyle={{marginVertical: hp(2)}}
                    />
                  </View>
                </KeyboardAwareScrollView>
              </View>
            </View>
          </Modal>
        </View>
      </SafeAreaView>
    );
  }
}
const mapStatetoProps = state => {
  return {};
};
const mapDispatchToProps = dispatch =>
  bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(CreateAccount);

const styles = StyleSheet.create({
  Container: {backgroundColor: color.gray49, flex: 1},
  splashImage: {
    position: 'absolute',
    right: getWidth(0),
    bottom: getHeight(0),
  },
  mainView: {flex: 1, backgroundColor: color.white},
  headerMain: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    height: hp(5),
    alignItems: 'center',
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
    paddingBottom: hp(2),
  },
  headerText: {
    fontSize: normalize(20),
    fontFamily: Fonts.SemiBold,
    color: color.themeDark,
    textAlign: 'center',
  },
  LabelText: {
    fontSize: normalize(15),
    fontFamily: Fonts.Regular,
    color: color.themegrey,
    marginTop: hp(1),
    marginVertical: hp(3),
    textAlign: 'center',
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
    // flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: color.white,
    alignItems: 'center',
    paddingTop: hp(5),
    paddingHorizontal: wp(5),
  },
  imageEditPhone: {
    width: wp(4),
    height: wp(4),
  },
  phoneNo: {
    fontSize: normalize(14),
    fontWeight: '500',
    color: color.themeBlack,
    fontFamily: Fonts.Regular,
  },
  inputContainer: flag => {
    return {
      padding: 5,
      height: hp(7),
      width: hp(7),
      backgroundColor: flag ? color.grey15 : color.themeDark,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      borderWidth: !flag ? 1 : 0,
      borderColor: color.gray1,
    };
  },
  otpInputText: {
    fontFamily: Fonts.Bold,
    fontSize: normalize(30),
    width: '100%',
    textAlign: 'center',
    color: color.themeColor,
    includeFontPadding: false,
    paddingBottom: 5,
    height: '100%',
    borderRadius: 100,
  },
  agreeText: {
    color: color.gray1,
    fontFamily: Fonts.Regular,
    fontSize: FontSize._16,
    marginHorizontal: wp(5),
    lineHeight: 25,
  },
  safeAreaTop: {
    flex: 0,
    backgroundColor: color.themeBlack,
    paddingVertical: StatusBar.currentHeight,
  },
  safeAreaBottom: {flex: 1, backgroundColor: color.grey},
  textDecoration: {
    fontSize: FontSize._16,
    fontFamily: Fonts.Bold,
    color: color.themeBlack,
    lineHeight: 25,
  },
  arrow: {marginBottom: hp(25), marginHorizontal: wp(2)},
});

const inLine = StyleSheet.create({});
