import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDWGr53EPIaGQjYI8eCrhPS8GrxAPrxuVI",
    authDomain: "ihop-2be90.firebaseapp.com",
    projectId: "ihop-2be90",
    storageBucket: "ihop-2be90.appspot.com",
    messagingSenderId: "212065746795",
    appId: "1:212065746795:web:ad478113908faff601962e",
    measurementId: "G-WRGTGPCQN7"
  };


  const app = initializeApp(firebaseConfig);
  export const db =  getFirestore(app);
  