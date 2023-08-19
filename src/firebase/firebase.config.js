
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: import.meta.env.VITE_apiKey,
    authDomain: import.meta.env.VITE_authDomain,
    projectId: import.meta.env.VITE_projectId,
    storageBucket: import.meta.env.VITE_storageBucket,
    messagingSenderId: import.meta.env.VITE_messagingSenderId,
    appId: import.meta.env.VITE_appId
};

// const firebaseConfig = {
//     apiKey: "AIzaSyCwb8DGSZqWDFExt9osUntytLLbaM8MWQg",
//     authDomain: "ami-coding-pari-na-4b68b.firebaseapp.com",
//     projectId: "ami-coding-pari-na-4b68b",
//     storageBucket: "ami-coding-pari-na-4b68b.appspot.com",
//     messagingSenderId: "1026995126455",
//     appId: "1:1026995126455:web:64d3db94054c413cb8cd32"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);