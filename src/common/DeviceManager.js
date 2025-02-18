// import DeviceInfo from 'react-native-device-info';
// import { Platform } from 'react-native'
// export default class DeviceManager {

//     // Get the device name
//     static deviceName = DeviceInfo.getDeviceName().then((deviceName) => {
//         return deviceName
//     });
    
//     // Get the model name
//     static modelName = DeviceInfo.getModel()

//     // Get OS Version
//     static OSVersion = DeviceInfo.getApiLevel().then((apiName) => {return apiName})

//     // Get ip
//     static ip = DeviceInfo.getIpAddress().then((ipAddress) => {return ipAddress})

//     // Return the device type
//     static deviceType = Platform.OS == 'ios' ? "I" : "A"

//     // Return application version
//     static applicationVersion = DeviceInfo.getVersion()
        
//     // Return UUID
//     static uuid = DeviceInfo.getUniqueId()
// }