// (function() {
//   const firebaseConfig = {
//     apiKey: "AIzaSyDWkkNnXdo-eabpOuug7Mn7bGCDjQv-Yn8",
//     authDomain: "annotation-app-b603e.firebaseapp.com",
//     databaseURL: "https://annotation-app-b603e.firebaseio.com",
//     projectId: "annotation-app-b603e",
//     storageBucket: "annotation-app-b603e.appspot.com",
//     messagingSenderId: "429449919797",
//     appId: "1:429449919797:web:9a73eca3528cb62ec7e07c",
//     measurementId: "G-GDWDNWLCZS"
//   };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
//   firebase.analytics();

//   const preObject = document.getElementById("object")

//   const dbRefObject = firebase.database().ref().child("object")
//   dbRefObject.on('value', snap => console.log(snap.val()))
// }());
