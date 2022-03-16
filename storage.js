// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const app = initializeApp(firebaseConfig);

// Create a root reference
const storage = firebase.storage();
const storageRef = storage.ref();

// Get UI elements
const file = document.getElementById('file');
const upload = document.getElementById('upload');
const download = document.getElementById('download');
const status = document.getElementById('status');
const image = document.getElementById('image');

// Upload file
upload.addEventListener('click', (e) => {
  // Create a file reference
  const ref = storageRef.child('globe');
  let photo = document.getElementById('file').files[0];

  // Upload
  ref.put(photo).then((snapshot) => {
    console.log('Uploaded a blob or file!');
    status.innerHTML = 'Uploaded a blob or file!';
  });
});
