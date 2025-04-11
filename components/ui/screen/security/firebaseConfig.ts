
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyCK9tcze0I01uSWeNayqUmdY490MiFEVmw",
    authDomain: "pos-system-c06a5.firebaseapp.com",
    projectId: "pos-system-c06a5",
    storageBucket: "pos-system-c06a5.appspot.com",
    messagingSenderId: "509587287340",
    appId: "1:509587287340:web:85353adb426ae469701089",
    measurementId: "G-RD556ECTDR"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

export { auth,storage };
