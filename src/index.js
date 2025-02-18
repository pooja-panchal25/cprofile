import React from 'react'
import { View, StyleSheet } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
 
import { Provider } from 'react-redux';
import myStore from './reducers';
import { StackNavigator } from '@navigators'

const store = myStore()
export default class App extends React.Component {

    componentDidMount() {
        setTimeout(() => {
            SplashScreen.hide();
        }, 2500);
    }

    render() {
        return (
            <Provider store={store} >
                <StackNavigator />
            </Provider >)
    }
}