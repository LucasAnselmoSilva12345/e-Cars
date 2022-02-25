// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getFirestore,
  collection,
  doc,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAbm1ipG8POxNTKFzwLvciyW817NeY--4c',
  authDomain: 'ecarsmultilogin.firebaseapp.com',
  projectId: 'ecarsmultilogin',
  storageBucket: 'ecarsmultilogin.appspot.com',
  messagingSenderId: '25355814160',
  appId: '1:25355814160:web:a60e4a82f06cf8bb725195',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = getAuth();

const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const signupEmail = document.querySelector('#signup-email').value;
  const signupPassword = document.querySelector('#signup-password').value;

  const containerModal = document.querySelector('[data-modal="container"]');

  const auth = getAuth();
  createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(
    (userCredential) => {
      signupForm.reset();
      containerModal.classList.remove('activeModal');
      console.log('Enviando');
    }
  );
});

const signinForm = document.querySelector('#signin-form');

signinForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const signinEmail = document.querySelector('#signin-email').value;
  const signinPassword = document.querySelector('#signin-password').value;

  const containerModal = document.querySelector('[data-modal="container"]');

  const auth = getAuth();
  signInWithEmailAndPassword(auth, signinEmail, signinPassword).then(
    (userCredential) => {
      signinForm.reset();
      containerModal.classList.remove('activeModal');
      console.log('SIGN IN');
    }
  );
});

const logout = document.querySelector('#logout');

logout.addEventListener('click', (e) => {
  e.preventDefault();

  const auth = getAuth();
  signOut(auth).then(() => {
    console.log('Sign-out successful');
  });
});

// const containerContent = document.querySelector('.containerContent');
const titleContent = document.querySelector('.titleContent h2');
const mainContent = document.querySelector('.mainContent');

// verificar autenticação
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    const db = getFirestore();
    // const salesCollection = collection(db, 'sales');
    // const salesCollection = doc(db, 'sales/S9INqtZ0OwHD35SkvT8d');

    const salesCollection = onSnapshot(
      doc(db, 'sales', 'S9INqtZ0OwHD35SkvT8d'),
      (doc) => {
        console.log(doc.data().title);
        console.log(doc.data().description);

        titleContent.innerHTML = doc.data().title;
        mainContent.innerHTML = doc.data().description;
      }
    );

    console.log('auth signIn');
  } else {
    titleContent.innerHTML = 'Um momento meu caro vendendor';
    mainContent.innerHTML =
      'Para realizar uma venda em nosso site, é necessario fazer sua autenticação primeiro';
    console.log('auth signOut');
  }
});
