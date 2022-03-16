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

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();

const whenSignedIn = document.getElementById('whenSignedIn');
const whenSignedOut = document.getElementById('whenSignedOut');

const signInBtn = document.getElementById('signInBtn');
const signOutBtn = document.getElementById('signOutBtn');

const userDetails = document.getElementById('userDetails');

const authStatus = document.getElementById('authStatus');

const provider = new firebase.auth.GoogleAuthProvider(); // Google provider instance
signInBtn.onclick = () => auth.signInWithPopup(provider);

signOutBtn.onclick = () => auth.signOut();

auth.onAuthStateChanged(user => {
  if (user) {
    // Signed in
    whenSignedIn.hidden = false;
    whenSignedOut.hidden = true;
    userDetails.innerHTML = `<h3>Greetings, ${user.displayName}!</h3>`;
    authStatus.innerHTML = `You are currently signed in with ${user.email}`

  } else {
    // Not signed in
    whenSignedIn.hidden = true;
    whenSignedOut.hidden = false;
    userDetails.innerHTML = '';
    authStatus.innerHTML = `You are not currently signed in.`
  }
});
