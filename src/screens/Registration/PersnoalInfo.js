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
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {strings, changeLanguage} from '../../localization/i18n';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import CountryPicker, {Flag} from 'react-native-country-picker-modal';
import moment from 'moment';

import {actionCreators} from '@actions';
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
import LabeledInput from '../../components/Input/LabeledInput';

class PersonalInfo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      Name: '',
      dateOfBirth: '',
      Location: '',
      pickerShow: false,
      modalVisible: false,
    };
  }

  componentDidUpdate() {}

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
            {/* <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('About');
              }}>
              <Text style={styles.HeaderLabelText}>
                {strings('Button.Skip')}
              </Text>
            </TouchableOpacity> */}
          </View>

          <Pagination
            index={3}
            totalCount={[1, 2, 3, 4, 5, 6]}
            ContainerStyle={{marginVertical: hp(3)}}
            isCountHide={false}
          />
          <KeyboardAwareScrollView
            style={{flex: 1}}
            contentContainerStyle={{flexGrow: 1}}
            bounces={false}
            showsVerticalScrollIndicator={false}>
            <View style={styles.subView}>
              <View style={styles.formView}>
                <Text style={styles.headerText}>
                  {strings('Label.personalInfo')}
                </Text>
                <Text style={styles.LabelText}>
                  {strings('Label.FillPersonalInfo')}
                </Text>

                <TouchableOpacity style={styles.SelectImage}>
                  <View style={styles.ImageInner}>
                    <Image resizeMode="contain" source={Icon.IcnChoosePhoto} />
                  </View>
                </TouchableOpacity>

                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({userName: changeText})
                  }
                  value={this.state.userName}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnUser}
                  placeHolder={strings('PlaceHolders.UseName')}
                />
                <LabeledInput
                  onChangeText={changeText => this.setState({Name: changeText})}
                  value={this.state.Name}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnUser}
                  placeHolder={strings('PlaceHolders.Name')}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({dateOfBirth: changeText})
                  }
                  value={this.state.dateOfBirth}
                  isLeftIcon={true}
                  leftIcon={Icon.Icncake}
                  isRightIcon={true}
                  rightIcon={Icon.IcnCalendarFill}
                  rightIconPress={() => console.log('show calender')}
                  placeHolder={strings('PlaceHolders.DateOfBirth')}
                  editable={false}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({Location: changeText})
                  }
                  value={this.state.Location}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnLocation}
                  isRightIcon={true}
                  rightIcon={Icon.IcnLocationFill}
                  rightIconPress={() => console.log('show location manager')}
                  placeHolder={strings('PlaceHolders.Location')}
                />
              </View>
            </View>

            <ThemeButton
              onPress={() => {
                this.props.navigation.navigate('About');
              }}
              buttonText={strings('Button.Next')}
              Conrtainerstyle={{marginHorizontal: wp(5), marginVertical: hp(2)}}
            />
          </KeyboardAwareScrollView>
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
export default connect(mapStatetoProps, mapDispatchToProps)(PersonalInfo);

const styles = StyleSheet.create({
  Container: {backgroundColor: color.gray49, flex: 1},
  splashImage: {
    position: 'absolute',
    right: getWidth(0),
    bottom: getHeight(0),
  },
  mainView: {flex: 1},
  headerMain: {
    flexDirection: 'row',
    marginHorizontal: wp(5),
    height: hp(5),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  HeaderLabelText: {
    fontSize: normalize(15),
    fontFamily: Fonts.Regular,
    color: color.themegrey,
    // marginTop: hp(1),
    // marginVertical: hp(3),
    textAlign: 'center',
  },
  subView: {
    paddingTop: hp(1),
    flex:1 ,
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
    // marginVertical: hp(3),
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
    flex: 1,
    borderRadius: 25,
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
      padding: 0,
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
    fontSize: normalize(50),
    height: 25,
    width: hp(7),
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    color: color.themeColor,
    includeFontPadding: false,
    paddingBottom: 5,
    textAlignVertical: 'center',
  },
  SelectImage: {
    borderColor: color.gray1,
    borderWidth: 1,
    borderRadius: wp(40),
    width: wp(40),
    height: wp(40),
    padding: 10,
    marginVertical: hp(2),
  },
  ImageInner: {
    backgroundColor: color.gray30,
    borderRadius: 100,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
