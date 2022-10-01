import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAY2AiiIczRcuZoJdsFsvxb9P1vt2OYThQ",
  authDomain: "placement-guidence.firebaseapp.com",
  projectId: "placement-guidence",
  storageBucket: "placement-guidence.appspot.com",
  messagingSenderId: "263982664423",
  appId: "1:263982664423:web:e569c27a98be43bc867042",
  measurementId: "G-HTVG4K03BZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app;