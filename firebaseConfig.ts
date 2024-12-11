import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import AsyncStorage from '@react-native-async-storage/async-storage';

const firebaseConfig = {
  apiKey: "AIzaSyCxMCd5Miwj5iY_NL-46pbOeVYBuogG-Z8",
  authDomain: "indrive-clone-cb6a7.firebaseapp.com",
  projectId: "indrive-clone-cb6a7",
  storageBucket: "indrive-clone-cb6a7.firebasestorage.app",
  messagingSenderId: "947191747611",
  appId: "1:947191747611:web:f5fc223a78ae3ab13414be"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Persist auth state manually
onAuthStateChanged(auth, async (user) => {
  if (user) {
    await AsyncStorage.setItem('authUser', JSON.stringify(user));
  } else {
    await AsyncStorage.removeItem('authUser');
  }
});

export {auth , app}