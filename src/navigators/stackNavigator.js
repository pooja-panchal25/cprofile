import React from "react";
import { View, Text } from 'react-native'
import { NavigationContainer } from "@react-navigation/native";
import BottomTabNav from "./bottomTabNavigator";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import * as Screen from '@screens'

const Stack = createNativeStackNavigator();

export class StackNavigator extends React.Component {
    _addScreen(name) {
        return (
            <Stack.Screen
                name={name}
                component={Screen[name]}
            />)
    }


    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerShown: false,
                        title: '',
                        headerLeft: null,
                        headerBackVisible: false

                    }}>
                    {/* {this._addScreen('OtherProfile')} */}
                    {this._addScreen('SplashScreen')}
                    <Stack.Screen name={"BottomTab"} component={BottomTabNav} />
                    
                    {/* Authentication Routes */}
                    {this._addScreen('Welcome')}
                    {this._addScreen('LanguageSelect')}
                    {this._addScreen('Login')}
                    {this._addScreen('ResetPassword')}
                    {this._addScreen('TypeSelection')}
                    {this._addScreen('CreateAccount')}
                    {this._addScreen('PersnoalInfo')}
                    {this._addScreen('About')}
                    {this._addScreen('EducatoinDetails')}
                    {this._addScreen('SocialMedia')}

                    {/* Home Screen Routes */}
                    {/* {this._addScreen('Home')} */}

                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}