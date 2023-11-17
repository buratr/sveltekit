import {deleteApp, getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDdXTxd7UgzoleyLWogcypU_9HtGoTv9XQ",
    authDomain: "project-furniro.firebaseapp.com",
    projectId: "project-furniro",
    storageBucket: "project-furniro.appspot.com",
    messagingSenderId: "333537642528",
    appId: "1:333537642528:web:187db79dcbf1eb2b8a9445"
};


let fireBaseApp:any
if(!getApps().length){
    fireBaseApp = initializeApp(firebaseConfig);
}else{
    fireBaseApp = getApp()
    deleteApp(fireBaseApp)
    fireBaseApp = initializeApp(firebaseConfig);
}

export const fireApp = fireBaseApp
export const db = getFirestore(fireBaseApp)
export const auth = getAuth(fireBaseApp)