import React from 'react';
import {
  View,
  StatusBar,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {actionCreators} from '@actions';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as Screen from '@screens';
import {Icon} from '../assets/Icon';
import {color} from '../common/GColor';
import {Fonts, FontSize} from '../assets';
import {strings, changeLanguage} from '../localization/i18n';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const BottomTab = createBottomTabNavigator();
let selectedIndex = 0;

const MyTabBar = props => {
  return (
    <View
      style={{backgroundColor: color.white , position: 'absolute', bottom: 0}}>
      <View style={{flexDirection: 'row', marginVertical: 10}}>
        {props.tabValue.map((item, index) => {
          return (
            <TouchableOpacity
              onPress={() => {
                selectedIndex = index;
                item.screen && props.navigation.navigate(item.screen);
              }}
              style={{alignItems: 'center', width: '33.33%'}}>
              <Image
                source={
                  selectedIndex == index
                    ? Icon[item.activeIcon]
                    : Icon[item.icon]
                }
                resizeMode='contain'
                style={{marginVertical: 10}}
              />
              <View
                style={{
                  backgroundColor:
                    selectedIndex == index ? color.themeColor : color.white,
                  width: 12,
                  height: 2,
                }}
              />
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};


class bottomTabNavigation extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tabValue: [
        {
          icon: 'IcnHome',
          activeIcon: 'IcnActiveHome',
          text: 'Home',
          screen: 'Home',
        },
        {
          icon: 'IcnNotification',
          activeIcon: 'IcnActiveNotification',
          text: 'Home3',
          screen: 'Notification',
        },
        {
          icon: 'IcnAccount',
          activeIcon: 'IcnActiveAccount',
          text: 'MyAccount',
          screen: 'MyAccount',
        },
      ],
    };
  }

  _addScreen(name) {
    return <BottomTab.Screen name={name} component={Screen[name]} />;
  }

  render() {
    return (
      <>
        <View
          style={{
            flex: 1,
            paddingTop: StatusBar.currentHeight,
            backgroundColor: 'white',
          }}>
          <BottomTab.Navigator
            tabBar={props => {
              var tabValue = {...props, ...this.state};
              return <MyTabBar {...tabValue} />;
            }}
            sceneContainerStyle={{paddingBottom: '10%'}}
            screenOptions={{
              headerShown: false,
            }}>
            {this._addScreen('Home')}
            {this._addScreen('Notification')}
            {this._addScreen('MyAccount')}
          </BottomTab.Navigator>
        </View>
      </>
    );
  }
}
const mapStatetoProps = (state) => {
    return {}
}
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch);
export default connect(mapStatetoProps, mapDispatchToProps)(bottomTabNavigation)

