// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDaThAiUl1Bjd0Oos7z-hbayHtNSuweNSc",
  authDomain: "olimpiadas-paris-site.firebaseapp.com",
  projectId: "olimpiadas-paris-site",
  storageBucket: "olimpiadas-paris-site.appspot.com",
  messagingSenderId: "126089152936",
  appId: "1:126089152936:web:0f898339df6a4e820a359d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);