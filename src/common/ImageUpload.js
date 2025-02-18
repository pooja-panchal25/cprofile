// import { RNS3 } from 'react-native-s3-upload';
// import { s3Detail } from './GConstants';
// import { toggleLoader } from './GFunction';

// export const folderName = {
//     player: 'tournament_express/player/',
//     team: 'tournament_express/team/',
// };

// export default class ImageUpload {

//     static getRendomString = () => {
//         var str = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
//         var length = 12;
//         var result = '';
//         for (var i = length; i > 0; --i)
//             result += str[Math.floor(Math.random() * str.length)];
//         return result + JSON.stringify(new Date().getTime());
//     };

//     static uploadImage = async (imgURI, folderName, callback) => {
//         toggleLoader(true)
//         var imageSize = 0;
//         const file = {
//             uri: imgURI,
//             name: this.getRendomString() + '.png',
//             type: 'image/png',
//         };

//         //Local (Specify options seperatly for live credential)
//         options = {
//             acl: 'public-read-write',
//             keyPrefix: `${folderName}`, // for folder name refer FolderName object
//             bucket: s3Detail.bucket,
//             region: s3Detail.region,
//             accessKey: s3Detail.accessKey,
//             secretKey: s3Detail.secretKey,
//             successActionStatus: 201,
//         };

//         console.log("rns3 bucket option --->", options)
//         await RNS3.put(file, options)
//             .progress((event) => {
//                 imageSize = event.total;
//             })
//             .then((response) => {
//                 toggleLoader(false)
//                 console.log("s3 bucket image response ----> ", response)
//                 if (response.status == 201) {
//                     let strImageName = response.body.postResponse.key;
//                     let fullUrl = response.body.postResponse.location;

//                     callback(
//                         strImageName.substring(strImageName.lastIndexOf('/') + 1),
//                         fullUrl,
//                     );
//                 } else {
//                     callback(null, Error('Failed to upload image to S3'));
//                 }
//             });
//     };

//     static uploadVideo = async (imgURI, folderName, callback) => {
//         toggleLoader(true)
//         var videoSize = 0;
//         const file = {
//             uri: imgURI,
//             name: this.getRendomString() + '.mp4',
//             type: 'video/mp4',
//         };

//         //Local (Specify options seperatly for live credential)
//         options = {
//             acl: 'public-read-write',
//             keyPrefix: `${folderName}`, // for folder name refer FolderName object
//             bucket: s3Detail.bucket,
//             region: s3Detail.region,
//             accessKey: s3Detail.accessKey,
//             secretKey: s3Detail.secretKey,
//             successActionStatus: 201,
//         };
//         console.log("rns3 bucket video option --->", options, file)
//         RNS3.put(file, options)
//             .progress((event) => {
//                 videoSize = event.total;
//             })
//             .then((response) => {
//                 toggleLoader(false)
//                 console.log("s3 bucket video response ----> ", response)
//                 if (response.status == 201) {
//                     let strImageName = response.body.postResponse.key;
//                     callback(
//                         strImageName.substring(strImageName.lastIndexOf('/') + 1),
//                         videoSize
//                     );
//                 } else {
//                     callback(null, Error('Failed to upload image to S3'));
//                 }
//             });
//     };
// }