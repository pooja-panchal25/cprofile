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

import {actionCreators} from '@actions';
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
import {EducatoinList} from '../../common/CommonData';
import {Images} from '../../assets';

class BankDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      courseName: '',
      passingYear: '',
      instituteName: '',
      aboutEducation: '',
      pickerShow: false,
      educationModalVisible: false,
      arrEducationList: [],
    };
  }

  componentDidMount() {
    this.setState({arrEducationList: EducatoinList});
  }

  _renderItem = (item, index) => (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{
        backgroundColor: color.white,
        width: '100%',
        borderRadius: 13,
        flexDirection: 'row',
        padding: wp(4),
        marginVertical: hp(1),
        alignItems: 'center',
        borderColor: color.gray15,
        borderWidth: 2,
      }}>
      <Image
        resizeMode="contain"
        source={Images.imgProfessionalUser}
        style={{width: wp(20), aspectRatio: 1}}
      />
      <View style={{flex: 1, marginLeft: wp(3)}}>
        <View style={{flexDirection: 'row'}}>
          <Text
            style={
              styles.TypeText
            }>{`${item?.cuorseName}  ( ${item?.passingYear} )`}</Text>
        </View>
        <Text style={styles.TypeSubText}>{item?.instituteName}</Text>
        <Text numberOfLines={2} style={styles.TypeSubText}>
          {item?.aboutCourse}
        </Text>
      </View>
      {/* <View style={{flexDirection: 'row'}}>
        <ThemeButton
          onPress={() => {
            this.props.navigation.navigate('SocialMedia');
          }}
          buttonText={strings('Button.SubmitButton')}
          Conrtainerstyle={{marginHorizontal: wp(2)}}
        />
        <ThemeButton
          onPress={() => {
            this.props.navigation.navigate('SocialMedia');
          }}
          buttonText={strings('Button.SubmitButton')}
          Conrtainerstyle={{marginHorizontal: wp(2)}}
        />
      </View> */}
    </TouchableOpacity>
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
            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('SocialMedia')}>
              <Text style={styles.HeaderLabelText}>
                {strings('Button.Skip')}
              </Text>
            </TouchableOpacity>
          </View>

          <Pagination
            index={5}
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
                  {strings('Label.EducationDetails')}
                </Text>
                <Text style={styles.LabelText}>
                  {strings('Label.AddEducationDetailsSubTitle')}
                </Text>

                <ThemeButton
                  onPress={() => {
                    this.setState({educationModalVisible: true});
                  }}
                  buttonText={strings('Button.AddEducation')}
                  Conrtainerstyle={{
                    marginVertical: hp(3),
                  }}
                />

                {console.log(
                  'this.state.arrEducationList',
                  this.state.arrEducationList,
                )}
                {this.state.arrEducationList.map((item, index) =>
                  this._renderItem(item, index),
                )}
              </View>
            </View>
            <ThemeButton
              onPress={() => {
                this.props.navigation.navigate('SocialMedia');
              }}
              buttonText={strings('Button.SubmitButton')}
              Conrtainerstyle={{marginHorizontal: wp(5), marginVertical: hp(3)}}
            />
          </KeyboardAwareScrollView>
        </View>

        <Modal
          animationType="slide"
          transparent={true}
          visible={this.state.educationModalVisible}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.setState({educationModalVisible: false});
            }}
            style={{flex: 1, backgroundColor: 'rgba(0,0,0,0.5)'}}
          />
          <View
            style={{
              backgroundColor: 'rgba(0,0,0,0.5)',
              justifyContent: 'flex-end',
            }}>
            <View style={styles.modal}>
              <KeyboardAwareScrollView
                bounces={false}
                style={{width: '100%'}}
                showsVerticalScrollIndicator={false}>
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                  }}>
                  <Text style={styles.headerText}>
                    {strings('Label.AddEducationDetails')}
                  </Text>
                  <Text
                    style={[
                      styles.LabelText,
                      {textAlign: 'center', marginHorizontal: wp(5)},
                    ]}>
                    {strings('Label.EnterEducationDetails')}
                  </Text>
                  <LabeledInput
                    onChangeText={changeText =>
                      this.setState({courseName: changeText})
                    }
                    value={this.state.courseName}
                    placeHolder={strings('PlaceHolders.EducationName')}
                  />
                  <LabeledInput
                    onChangeText={changeText =>
                      this.setState({passingYear: changeText})
                    }
                    value={this.state.passingYear}
                    placeHolder={strings('PlaceHolders.PassingYear')}
                  />
                  <LabeledInput
                    onChangeText={changeText =>
                      this.setState({instituteName: changeText})
                    }
                    value={this.state.instituteName}
                    rightIconPress={() => console.log('show calender')}
                    placeHolder={strings('PlaceHolders.InstituteName')}
                  />
                  <LabeledInput
                    onChangeText={changeText =>
                      this.setState({aboutEducation: changeText})
                    }
                    value={this.state.aboutEducation}
                    rightIconPress={() => console.log('show location manager')}
                    multiline={true}
                    numberOfLines={10}
                    Containerstyle={{height: hp(20)}}
                    placeHolder={strings('PlaceHolders.AboutEducation')}
                  />

                  <ThemeButton
                    onPress={() => {
                      this.setState({educationModalVisible: false});
                    }}
                    buttonText={strings('Button.Add')}
                    buttonConrtainerstyle={{marginVertical: hp(2)}}
                  />
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
export default connect(mapStatetoProps, mapDispatchToProps)(BankDetails);

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
    fontSize: normalize(15),
    fontFamily: Fonts.SemiBold,
    color: color.themeBlack,
  },
  TypeSubText: {
    fontSize: normalize(13),
    fontFamily: Fonts.Bold,
    color: color.gray1,
    marginTop: hp(0.5),
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
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: color.white,
    alignItems: 'center',
    paddingTop: hp(5),
    paddingHorizontal: wp(5),
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
