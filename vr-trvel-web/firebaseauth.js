// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth ,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth.js";
import { getFirestore,setDoc,doc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBMfPlWrDPHbLsJa7rnpFJ9nUOlCbc8F9E",
  authDomain: "vr-travelling-website.firebaseapp.com",
  projectId: "vr-travelling-website",
  storageBucket: "vr-travelling-website.appspot.com",
  messagingSenderId: "481540906882",
  appId: "1:481540906882:web:a6e8fed12a1569d0ed799b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const signUp=document.getElementById('submitSignUp')
signUp.addEventListener('click',(Event)=>{
    Event.preventDefault();
    const myname1= document.getElementById('rname').value;
    const email= document.getElementById('remail').value;
    const myphone= document.getElementById('phonenum').value;
    const myage= document.getElementById('rage').value;
    
    const auth=getAuth();
    const db=getFirestore();
    createUserWithEmailAndPassword(auth,email)
    .then((userCredential) => {
      const user=userCredential.user;
      const userData={
        name:myname1,
        email:email,
        phone:myphone,
        age:myage
      };
      showMessage('Registerd Successfully','signUpMessage');
      const docRef=doc(db,"users",user.uid)
      setDoc(docRef,userData)
      .then(()=>{
        window.location.href='index.html';
      })
      .catch((error)=>{
        console.error("error writing document",error);
    });
  })
  .catch((error)=>{
    const errorCode=error.code;
    if(errorCode=='auth/email-already-in-use'){
      showMessage('Email Address Already Exists!!!','signUpMessage');
  }
  else{
    showMessage('unable to register','signUpMessage');
  }
  })

});