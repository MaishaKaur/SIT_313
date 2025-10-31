import {initializeApp } from "firebase/app"; /* this line is used to initialize the firebase app in simple words to turn 
 on the connection between our react app and firebase */ 

import {getFirestore } from "@firebase/firestore"/* this lets us use the firestore which is the firebase's cloud database where all the detailes like questions, articles are stored*/
import { getAuth } from "firebase/auth";
const firebaseConfig = {  /* this is the configuration object for our firebase app and this contains all the keys and identifiers for our app */
  apiKey: "AIzaSyDAl7PO3MPtbwlpy46hnTiuUVFsEs1yZUU",
  authDomain: "dev-deakin-task-8-1d.firebaseapp.com",
  projectId: "dev-deakin-task-8-1d",
  storageBucket: "dev-deakin-task-8-1d.firebasestorage.app",
  messagingSenderId: "201020448057",
  appId: "1:201020448057:web:073f9914d84fe070801ce8",
  measurementId: "G-3BVBM5FVT5"
};

// Initialize Firebase
export const app =initializeApp(firebaseConfig); /* this line initializes the firebase app using the configuration object above */

export const db = getFirestore(app);/* this line exports the firestore database instance so that we can use it in other parts of our react app in simple words it allows us to interact with the firestore
 database  through a handle db so we can import db anywhere in our app and use its methods */