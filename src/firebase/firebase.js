import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth();

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGoogle = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserProfileDoc = async (authUser, detailedProfile) => {
  if (!authUser) return;

  // Check if userDoc existed in db
  const userDoc = await doc(db, "users", authUser.uid);
  const userSnapshot = await getDoc(userDoc);
  const isUserExist = userSnapshot.exists();

  // if not exist, create user in db
  if (!isUserExist) {
    const { displayName, email, photoURL } = authUser;

    try {
      await setDoc(userDoc, {
        displayName,
        email,
        photoURL,
        createdAt: serverTimestamp(),
        ...detailedProfile,
      });
    } catch (error) {
      console.error("ERROR MESSAGE: ", error);
    }
  }

  return userDoc;
};

export default app;
