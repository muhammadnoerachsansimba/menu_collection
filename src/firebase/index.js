import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCHDj_7caGk4Z8iLre1Ow8kDoqhgx5UbKU",
    authDomain: "learning-vuefirebase.firebaseapp.com",
    projectId: "learning-vuefirebase",
    storageBucket: "learning-vuefirebase.appspot.com",
    messagingSenderId: "588415066736",
    appId: "1:588415066736:web:8ce5aec65dc9abdc6bcab5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
    db
}