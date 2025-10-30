import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDIYahM0OWHtzwxqiuyEaIgxibQ2sv8voQ",
  authDomain: "reacthook-d121e.firebaseapp.com",
  databaseURL: "https://reacthook-d121e-default-rtdb.firebaseio.com",
  projectId: "reacthook-d121e",
  storageBucket: "reacthook-d121e.firebasestorage.app",
  messagingSenderId: "589044113167",
  appId: "1:589044113167:web:19a63483cade38e4b2a87a",
  measurementId: "G-0DPQ8JRKSJ",
  databaseURL: "https://reacthook-d121e-default-rtdb.firebaseio.com/"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export const db = getFirestore(app);
export {app};