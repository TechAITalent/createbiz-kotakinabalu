// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8OIKmMrgSJnRHU0VSks4anBXd26p2FY0",
  authDomain: "createbiz-kotakinabalu-b2c24.firebaseapp.com",
  projectId: "createbiz-kotakinabalu-b2c24",
  storageBucket: "createbiz-kotakinabalu-b2c24.appspot.com",
  messagingSenderId: "895194981341",
  appId: "1:895194981341:web:02fc6faf5e056a3dbc0c34"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { app, firestore, storage };