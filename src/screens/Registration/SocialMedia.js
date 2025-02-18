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
import {CommonActions} from '@react-navigation/native';

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

class SocialMedia extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      youtube: '',
      instagram: '',
      twitter: '',
      Tiktok: '',
      Redit: '',
      Discord: '',
      pickerShow: false,
      modalVisible: false,
    };
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
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.dispatch(
                  CommonActions.reset({
                    index: 0,
                    routes: [{name: 'BottomTab'}],
                  }),
                )
              }>
              <Text style={styles.HeaderLabelText}>
                {strings('Button.Skip')}
              </Text>
            </TouchableOpacity>
          </View>

          {/* <Pagination index={5} ContainerStyle={{ marginVertical: hp(3) }} /> */}
          <Pagination
            index={6}
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
                  {strings('Label.SocialMedia')}
                </Text>
                <Text style={styles.LabelText}>
                  {strings('Label.SocialLink')}
                </Text>

                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({youtube: changeText})
                  }
                  value={this.state.youtube}
                  placeHolder={strings('PlaceHolders.Youtube')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnYoutube}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({instagram: changeText})
                  }
                  value={this.state.instagram}
                  placeHolder={strings('PlaceHolders.Instagram')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnInstagram}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({Discord: changeText})
                  }
                  value={this.state.Discord}
                  rightIconPress={() => console.log('show location manager')}
                  placeHolder={strings('PlaceHolders.FaceBook')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnDiscord}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({twitter: changeText})
                  }
                  value={this.state.twitter}
                  rightIconPress={() => console.log('show calender')}
                  placeHolder={strings('PlaceHolders.TokTok')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnTiktok}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({Tiktok: changeText})
                  }
                  value={this.state.Tiktok}
                  rightIconPress={() => console.log('show location manager')}
                  placeHolder={strings('PlaceHolders.Twitter')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnTwitter}
                />
                <LabeledInput
                  onChangeText={changeText =>
                    this.setState({Redit: changeText})
                  }
                  value={this.state.Redit}
                  rightIconPress={() => console.log('show location manager')}
                  placeHolder={strings('PlaceHolders.LinkedIn')}
                  isLeftIcon={true}
                  leftIcon={Icon.IcnRedit}
                />
              </View>
            </View>
            <ThemeButton
              onPress={() => this.setState({modalVisible: true})}
              buttonText={strings('Button.SubmitButton')}
              Conrtainerstyle={{marginHorizontal: wp(5), marginVertical: hp(3)}}
            />
          </KeyboardAwareScrollView>
        </View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.modalVisible}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.setState({modalVisible: false});
            }}
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: 'rgba(0,0,0,0.5)',
              paddingHorizontal: wp(5),
            }}>
            <View style={styles.modal}>
              <KeyboardAwareScrollView
                enableOnAndroid={true}
                bounces={false}
                showsVerticalScrollIndicator={false}>
                <View style={{flex: 1, alignItems: 'center'}}>
                  <View style={{height: wp(30)}}></View>
                  <Text style={styles.headerText}>
                    {strings('Label.Accountcreatedsuccessfully')}
                  </Text>

                  <ThemeButton
                    onPress={() => {
                      this.setState({modalVisible: false}, () => {
                        this.props.navigation.dispatch(
                          CommonActions.reset({
                            index: 0,
                            routes: [{name: 'BottomTab'}],
                          }),
                        );
                      });
                    }}
                    buttonText={strings('Button.ExploreApp')}
                    buttonConrtainerstyle={{marginVertical: hp(4)}}
                  />
                </View>
              </KeyboardAwareScrollView>
            </View>
          </TouchableOpacity>
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
export default connect(mapStatetoProps, mapDispatchToProps)(SocialMedia);

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
    marginHorizontal: wp(10),
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
    borderRadius: 25,
    backgroundColor: color.white,
    alignItems: 'center',
    paddingTop: hp(5),
    paddingHorizontal: wp(5),
  },
});
