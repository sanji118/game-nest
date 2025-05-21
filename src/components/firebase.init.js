// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDA6jEBMxsyFCkgwzsSp6UfCB1DhybgRYM",
  authDomain: "game-nest-63861.firebaseapp.com",
  projectId: "game-nest-63861",
  storageBucket: "game-nest-63861.firebasestorage.app",
  messagingSenderId: "778348550738",
  appId: "1:778348550738:web:ceb170c7c2e6c9b4205d8b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;