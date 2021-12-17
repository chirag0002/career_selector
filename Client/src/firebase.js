
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyDSfLgwvBmtS8YE6BtinR5r35z2OsTwNkA",
  authDomain: "career-selector-aca60.firebaseapp.com",
  projectId: "career-selector-aca60",
  storageBucket: "career-selector-aca60.appspot.com",
  messagingSenderId: "1064093111243",
  appId: "1:1064093111243:web:c5cdc61a3588d3cdd59c4e"
};


const app = initializeApp(firebaseConfig);


const authentication = getAuth(app);

export default authentication;