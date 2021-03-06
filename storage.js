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

// Download file
download.addEventListener('click', (e) => {
  // File reference
  const ref = storage.ref('globe');

  ref.getDownloadURL().then((url) => {
    // Insert url into an img tag to download
    image.src = url;
    status.innerHTML = 'Downloaded a blob or file!';
  }).catch((error) => console.log(error));
});
