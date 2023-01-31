
// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { BrowserWindow } from "electron";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCP9kuUw6tB-BHrCfYXfKB1lgDu24Swmw",
  authDomain: "wfmapp-67a1d.firebaseapp.com",
  databaseURL: "https://wfmapp-67a1d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wfmapp-67a1d",
  storageBucket: "wfmapp-67a1d.appspot.com",
  messagingSenderId: "80760163680",
  appId: "1:80760163680:web:c46cecdc3cb1f7b47f2205",
  measurementId: "G-H36TDGWGMJ"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var WFMApp = firebase.database().ref("WFMApp");

document.getElementById("WFMApp").addEventListener("submit",submitForm);

function submitForm(e) {
    e.preventDefault();

    var Day = getElementVal ("Day");
    var Calls = getElementVal("Calls");
}

const saveMessages = (Day, Calls) => {
    var WFMApp = WFMApp.push();

    newWFMApp.set ({
        Day: Day,
        Calls: Calls
    })
}


// let win = null;
// const createWindow = () => {
//     win = new BrowserWindow ( { 
//         width:800,
//         height:600,
//         resizable:true,
//         webPreferences: {
//             nodeIntegration:true
//         }
//     })

//     win.loadFile("index.html");

// };

// app.whenRead().them(createWindow);
