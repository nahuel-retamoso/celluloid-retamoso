import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyAFAqTx6YGulrUVYKJR1I2W0327wcVnoHk",
  authDomain: "celluloid-ecommerce.firebaseapp.com",
  projectId: "celluloid-ecommerce",
  storageBucket: "celluloid-ecommerce.appspot.com",
  messagingSenderId: "25343799501",
  appId: "1:25343799501:web:1cde101672114b3090b984"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)