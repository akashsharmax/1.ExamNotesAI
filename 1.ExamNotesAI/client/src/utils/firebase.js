
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
   authDomain: "examnotesai-96bb8.firebaseapp.com",
  projectId: "examnotesai-96bb8",
  storageBucket: "examnotesai-96bb8.firebasestorage.app",
  messagingSenderId: "187335345509",
  appId: "1:187335345509:web:4da2d02a0dc345097c4d8c"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

const provider = new GoogleAuthProvider()

export {auth , provider}