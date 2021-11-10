import firebase from 'firebase/compat'


 const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC3u_L1gcA4wYZJ6btueaUClMoSJaEqesc",
    authDomain: "instagram-clone-react-js-4f5fb.firebaseapp.com",
    databaseURL: "instagram-clone-react-js-4f5fb.firebaseio.com",
    projectId: "instagram-clone-react-js-4f5fb",
    storageBucket: "instagram-clone-react-js-4f5fb.appspot.com",
    messagingSenderId: "1081558703022",
    appId: "1:1081558703022:web:bf729ac832b89643a0c63f"
  }); 

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db,auth,storage };

