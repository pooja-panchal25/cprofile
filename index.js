/**
 * @format
 */

 import { AppRegistry } from 'react-native';
 import App from './src';
 import { name as appName } from './app.json';
 
 
 import { LogBox } from 'react-native';
 LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
 LogBox.ignoreAllLogs();
 
 
 AppRegistry.registerComponent(appName, () => App);
 