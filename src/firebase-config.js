// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBDbJVanZdkR6Az07cqnKjdgXqTiNW22dk",
  authDomain: "social-image-gen.firebaseapp.com",
  projectId: "social-image-gen",
  storageBucket: "social-image-gen.appspot.com",
  messagingSenderId: "963588554839",
  appId: "1:963588554839:web:2d49027cedd9ef772ba312",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage };
