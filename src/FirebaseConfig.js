import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyC4Fn2RZrrjx1rx9oZYsZ-oNJDcOnFjcsc",
  authDomain: "spooling-factory.firebaseapp.com",
  projectId: "spooling-factory",
  storageBucket: "spooling-factory.appspot.com",
  messagingSenderId: "288782351068",
  appId: "1:288782351068:web:d2e81d8137cce0d29f5219",
  measurementId: "G-42PJH1JGXH"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {app, db}