import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-app.js';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-auth.js';

import {
  getFirestore,
  doc,
  onSnapshot,
} from 'https://www.gstatic.com/firebasejs/9.6.7/firebase-firestore.js';

const firebaseConfig = {
  apiKey: 'AIzaSyAbm1ipG8POxNTKFzwLvciyW817NeY--4c',
  authDomain: 'ecarsmultilogin.firebaseapp.com',
  projectId: 'ecarsmultilogin',
  storageBucket: 'ecarsmultilogin.appspot.com',
  messagingSenderId: '25355814160',
  appId: '1:25355814160:web:a60e4a82f06cf8bb725195',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const containerModal = document.querySelector('[data-modal="container"]');

// SIGNUP
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const signupEmail = document.querySelector('#signup-email').value;
  const signupPassword = document.querySelector('#signup-password').value;

  createUserWithEmailAndPassword(auth, signupEmail, signupPassword).then(() => {
    signupForm.reset();
    containerModal.classList.remove('activeModal');

    alert('Usuário criado');
  });
});

// SIGNIN
const signinForm = document.querySelector('#signin-form');
signinForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const signinEmail = document.querySelector('#signin-email').value;
  const signinPassword = document.querySelector('#signin-password').value;
  const registerBtn = document.querySelector('.register-btn');

  signInWithEmailAndPassword(auth, signinEmail, signinPassword).then(
    (userCredential) => {
      signinForm.reset();
      containerModal.classList.remove('activeModal');

      const userEmail = userCredential.user.email;
      registerBtn.innerHTML = `<a href="#" data-modal="open" class="register-btn">
                                <i class="gg-profile"></i>
                                <span>${userEmail}</span>
                              </a>`;
    }
  );
});

// LOGOUT
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  signOut(auth).then(() => {
    containerModal.classList.remove('activeModal');

    const registerBtn = document.querySelector('.register-btn');
    registerBtn.innerHTML = `<a href="#" data-modal="open" class="register-btn">
                                <i class="gg-profile"></i>
                                Faça seu login
                              </a>`;
  });
});

// LOGIN TO GOOGLE
const btnLoginToGoogle = document.querySelector('#btnLoginToGoogle');
btnLoginToGoogle.addEventListener('click', () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const userDisplayName = result.user.displayName;

      const registerBtn = document.querySelector('.register-btn');
      registerBtn.innerHTML = `<a href="#" data-modal="open" class="register-btn">   
                                <span>${userDisplayName}</span>
                              </a>`;

      containerModal.classList.remove('activeModal');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// LOGIN TO FACEBOOK
const btnLoginToFacebook = document.querySelector('#btnLoginToFacebook');
btnLoginToFacebook.addEventListener('click', () => {
  const provider = new FacebookAuthProvider();

  signInWithPopup(auth, provider)
    .then((result) => {
      const userDisplayName = result.user.displayName;

      const registerBtn = document.querySelector('.register-btn');
      registerBtn.innerHTML = `<a href="#" data-modal="open" class="register-btn">   
                                <span>${userDisplayName}</span>
                              </a>`;

      containerModal.classList.remove('activeModal');
    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage);
    });
});

// verificar autenticação
const titleContent = document.querySelector('.titleContent h2');
const mainContent = document.querySelector('.mainContent');

onAuthStateChanged(auth, (user) => {
  if (user) {
    const db = getFirestore();

    onSnapshot(doc(db, 'sales', 'S9INqtZ0OwHD35SkvT8d'), (doc) => {
      titleContent.innerHTML = doc.data().title;
      mainContent.innerHTML = doc.data().description;

      // adicionar class de display block para aparecer opções de venda
    });
  } else {
    titleContent.innerHTML = 'Um momento meu caro vendendor';
    mainContent.innerHTML =
      'Para realizar uma venda em nosso site, é necessario fazer sua autenticação primeiro';
  }
});
