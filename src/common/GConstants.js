import React from 'react'
import { Alert, Dimensions, Platform, Text, View } from "react-native";
// import { checkMultiple, openSettings, PERMISSIONS, request, requestMultiple, RESULTS } from 'react-native-permissions';
import { color } from './GColor';
import AsyncStorage from '@react-native-async-storage/async-storage';


//Global function
export function getWidth(size) {
  return (size / 375) * screenSize.width;
}
export function getHeight(size) {
  return (size / 812) * screenSize.height;
}

// Global size

export const screenSize = {
  height: Dimensions.get('window').height,
  width: Dimensions.get('window').width,
};

// Font family used in app

export const fontFamily = {
  regular: 'ProximaNova-Regular',
  bold: 'ProximaNova-Bold',
  boldItalic: 'ProximaNova-BoldIt',
  extraBold: 'ProximaNova-Extrabld',
  medium: 'ProximaNova-Medium',
  mediumItalic: 'ProximaNova-MediumIt',
  italic: 'ProximaNova-RegularIt',
  semiBold: 'ProximaNova-Semibold',
  black: 'ProximaNova-Black',
  thin: 'ProximaNovaT-Thin',
  technology: Platform.select({ ios: "Digital-Display", android: "DigitalDisplayRegular-ODEO" })
};
// Font Size 

export const fontSize = {
  size9: getWidth(9),
  size10: getWidth(10),
  size11: getWidth(11),
  size12: getWidth(12),
  size13: getWidth(13),
  size14: getWidth(14),
  size15: getWidth(15),
  size16: getWidth(16),
  size17: getWidth(17),
  size18: getWidth(18),
  size19: getWidth(19),
  size20: getWidth(20),
  size21: getWidth(21),
  size22: getWidth(22),
  size23: getWidth(23),
  size24: getWidth(24),
  size25: getWidth(25),
  size26: getWidth(26),
  size27: getWidth(27),
  size28: getWidth(28),
  size36: getWidth(36),
  size42: getWidth(42)
};

// Top tab names 
export const topTabName = {
  home: "SearchTournamentScreen",
  team: "SearchTeamScreen",
  player: "SearchPlayerScreen",
  venue: "SearchVenueScreen"
}


// App Name
export const appName = "Tournament Express"
export const currency = "$"

// Touchable opacity alpha
export const opacity = 0.6

// Constants for keyboardType
export const keyboard_type = {
  email: "email-address",
  ascii_capable_numberpad: "ascii-capable-number-pad",
  ascii_capable: "ascii-capable",
  numeric: 'numeric'
}


// Error Function 

export function showError(message) {
  Alert.alert(
    appName,
    message,
    [
      { text: "Ok" }
    ]
  )
}

// DateTime formate 
export const dateTimeFormate = {
  ddMMMYYYYHHMMA: "DD MMM,YYYY - hh:m A",
  hhMM: "hh : mm",
  aa: "A"
}
// Permissions 

// export const cameraPermission = Platform.select({ ios: PERMISSIONS.IOS.CAMERA, android: PERMISSIONS.ANDROID.CAMERA })
// export const location = Platform.select({ ios: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE, android: PERMISSIONS.ANDROID.CAMERA })
// export const galleryPermission = Platform.select({ ios: PERMISSIONS.IOS.PHOTO_LIBRARY, android: PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE })

// Permission popup

// export function checkPermission(permission, message) {
//   return new Promise((callback) => {
//     checkMultiple([permission]).then((status) => {
//       if (status[permission] == RESULTS.DENIED || status[permission] == RESULTS.UNAVAILABLE) {
//         requestMultiple([permission]).then((status) => {
//           let data = Object.values(status);
//           if (data.length > 0) {
//             callback(data[0] == "granted");
//           } else {
//             callback(false);
//           }
//         });
//         callback(false)
//       } else if (status[permission] == RESULTS.BLOCKED) {
//         if (Platform.OS == "ios") {
//           Alert.alert(
//             appName,
//             message,
//             [
//               {
//                 text: 'DontAllow',
//                 onPress: () => console.log("Cancel Pressed"),
//                 style: "cancel"
//               },
//               { text: 'Allow', onPress: () => openSettings() }
//             ],
//             { cancelable: false }
//           )
//         } else {
//           Alert.alert(
//             appName,
//             message,
//             [
//               {
//                 text: 'DontAllow',
//                 onPress: () => console.log("Cancel Pressed"),
//                 style: "cancel"
//               },
//               { text: 'Allow', onPress: () => openSettings() }
//             ],
//             { cancelable: false }
//           )
//         }
//         callback(false)
//       } else {
//         console.log("Permission printe here: ", status[permission])
//         callback(true)
//       }
//     })
//   })

// }
// Take permission from user

export function showAlert(message) {
  return new Promise((callback) => {
    Alert.alert(
      appName,
      message,
      [
        {
          text: "No",
          onPress: () => console.log("cancel"),
          style: 'cancel'
        },
        {
          text: 'Yes',
          onPress: () => callback(true)
        }
      ],
      { cancelable: false }
    )
  })
}

export function infoAlert(message) {
  return new Promise((callback) => {
    Alert.alert(
      appName,
      message,
      [
        {
          text: 'Ok',
          onPress: () => callback(true)
        }
      ],
      { cancelable: false }
    )
  })
}

// Empty message

export const emptyComponent = (msg) => {
  return (
    <View style={{
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      padding: 12
    }}>
      <Text
        style={{
          fontFamily: fontFamily.bold,
          fontSize: fontSize.size16,
          color: color.black
        }}
      >{msg}</Text>
    </View>
  )
}

export const sliderMinValue = 0
export const sliderMaxValue = 20

// Set value in encrypted storage

export async function setData(key, value) {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.log("[Async Storage] Error in set data : ", error)
  }
}

// Get value from Encrypted storage
export async function getData(key, callback) {
  try {
    var value = await AsyncStorage.getItem(key)
    callback(value)
  } catch (error) {
    console.log("[Async Storage] Error in get data : ", error)
  }
}

// Encrypted storage keys

export const asyncStorageKey = {
  isWalkthroughVisisted: "isWalkthroughVisisted",
  isUserLoggedIn: "isUserLoggedIn",
  userData: "userData"
}

// S3Bucket details

export const s3Detail = {
  bucket: "",
  secretKey: "",
  accessKey: "",
  region: "",

}