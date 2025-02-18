// import { Platform } from 'react-native'
// import { checkMultiple, PERMISSIONS, request, requestMultiple, RESULTS } from "react-native-permissions"
// import Geolocation, { requestAuthorization } from 'react-native-geolocation-service';

// export default class LocationManager {
//     static getLocation = (callback) => {
        
//         let permission = Platform.select({ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, android: PERMISSIONS.ANDROID.ACCESS_COARSE_LOCATION})
//         checkMultiple([permission]).then((status) => {
//             console.log("One")
//             if (status[permission] == RESULTS.UNAVAILABLE || status[permission] == RESULTS.DENIED){
                
//                 request(permission).then((status) => {
//                     console.log("Three")
//                     console.log("Four", status)
//                         if (status == "granted"){
//                             console.log("six")
//                             Geolocation.getCurrentPosition(
//                                 (position) => {
//                                     console.log("Seven")
//                                    callback(position)
//                                 },
//                                 (error) => {
//                                   // See error code charts below.
//                                   console.log(error.code, error.message);
//                                 },
//                                 { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//                             );
//                     } else {
//                         console.log("Eight")
//                         callback(false);
//                     }
//                 })
//             }else {
//                 Geolocation.getCurrentPosition(
//                     (position) => {
//                         console.log("Seven")
//                        callback(position)
//                     },
//                     (error) => {
//                       // See error code charts below.
//                       console.log(error.code, error.message);
//                     },
//                     { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
//                 );
//             }
//         })
//     }
// }