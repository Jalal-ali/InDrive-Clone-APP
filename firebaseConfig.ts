import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCxMCd5Miwj5iY_NL-46pbOeVYBuogG-Z8",
  authDomain: "indrive-clone-cb6a7.firebaseapp.com",
  projectId: "indrive-clone-cb6a7",
  storageBucket: "indrive-clone-cb6a7.firebasestorage.app",
  messagingSenderId: "947191747611",
  appId: "1:947191747611:web:f5fc223a78ae3ab13414be"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const Auth = getAuth(app);