// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBQGaiyHyn70izcGqmkIyP2xDvsXylp3lc",
  authDomain: "bookstay-60d2c.firebaseapp.com",
  projectId: "bookstay-60d2c",
  storageBucket: "bookstay-60d2c.appspot.com",
  messagingSenderId: "425656245145",
  appId: "1:425656245145:web:cf30827c2ccce695495108",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
