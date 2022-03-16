// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXSK_DpqIerCRyx6Lo4FvHZEh81Gr2vSM",
  authDomain: "second-project-fc8fd.firebaseapp.com",
  databaseURL: "https://second-project-fc8fd-default-rtdb.firebaseio.com",
  projectId: "second-project-fc8fd",
  storageBucket: "second-project-fc8fd.appspot.com",
  messagingSenderId: "198455979766",
  appId: "1:198455979766:web:e5ad1252ab1327a7ae06d7"
};

// Get elements
const email = document.getElementById('email');
const password = document.getElementById('password');
const login = document.getElementById('login');
const signup = document.getElementById('signup');
const logout = document.getElementById('logout');

// Login
login.addEventListener('click', (e) => {
  const auth = firebase.auth();
  const promise = auth.signInWithEmailAndPassword(email.value, password.value);
  promise.catch(e => console.log(e.message));
});

// Sign up
signup.addEventListener('click', (e) => {
  // TODO: check for real email
  const auth = firebase.auth();
  const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
  promise.catch(e => console.log(e.message));
});

// logout
logout.addEventListener('click', (e) => {
  firebase.auth().signOut();
});

// Login state
firebase.auth().onAuthStateChanged(firebaseUser => {
  else {
    console.log('User is not logged in');
    logout.style.display = 'none';
    login.style.display = 'inline';
    signup.style.display = 'inline';
  }
})
