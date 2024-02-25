// firebase.js
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDRVw3h88OaQfxhP0sXorKT2wC8rZhoxDA",
    authDomain: "subease-283bc.firebaseapp.com",
    databaseURL: "https://subease-283bc-default-rtdb.firebaseio.com",
    projectId: "subease-283bc",
    storageBucket: "subease-283bc.appspot.com",
    messagingSenderId: "845189068592",
    appId: "1:845189068592:web:702bb21551610c2aa1faf5",
    measurementId: "G-8J5SR6V4XJ"
};
// Initialize Firebase only if there are no initialized apps
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
