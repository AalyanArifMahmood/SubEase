
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default function Listings()
{
    return (
        <>
        </>
    );
}