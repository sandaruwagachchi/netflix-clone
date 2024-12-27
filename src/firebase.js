// Import the functions you need from the SDKs 
// you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdDE3MJcxYVpg1-VP6CUJ97wq6JDpVkYc",
  authDomain: "netflix-clone-2d172.firebaseapp.com",
  projectId: "netflix-clone-2d172",
  storageBucket: "netflix-clone-2d172.firebasestorage.app",
  messagingSenderId: "302796517039",
  appId: "1:302796517039:web:a23791e0cd31ded51c6e5a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name, email, password)=>{
try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "user"),{
        uid: user.uid,
        name,
        authProvider:"local",
        email,
    })
}
catch(error){
   console.log(error);
   toast.error(error.code.split('/')[1].split('-').join(""))
}
}

const login = async (email, password)=>{
    try{
        await signInWithEmailAndPassword(auth, email, password);
    }
    catch(error){
        console.log(error);
        toast.error(error.code.split('/')[1].split('-').join(" "))
    }
}

const logout = async ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};