//Firebase
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signInWithRedirect } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

//Web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqOwfvg4t98_ceel3SLfw7-k9rRWwt920",
  authDomain: "crwn-clothing-db-12cbb.firebaseapp.com",
  projectId: "crwn-clothing-db-12cbb",
  storageBucket: "crwn-clothing-db-12cbb.appspot.com",
  messagingSenderId: "746793085194",
  appId: "1:746793085194:web:e43c72be5e0aa4ed1732f3"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

//Firestore Conf

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, { displayName, email, createdAt });
    } catch (e) {
      console.log("error creating the user", e.message);
    }
  }

  return userDocRef;
};