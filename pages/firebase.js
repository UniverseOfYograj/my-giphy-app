import { initializeApp} from 'firebase/app';
import{getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  // ... your Firebase config
  apiKey: "AIzaSyCjRsgOAJr93s2SyKmuGgSc7VXB3KsXv9c",
  authDomain: "giphy-next-proj.firebaseapp.com",
  projectId: "giphy-next-proj",
  storageBucket: "giphy-next-proj.appspot.com",
  messagingSenderId: "472672991360",
  appId: "1:472672991360:web:d0d7765e786bf099668e65"
};

// Initialize the app first
// initializeApp(firebaseConfig);

// Check if Firebase app is already initialized
const app = initializeApp(firebaseConfig);
// const analytics= getAnalytics(app);

const auth = getAuth(app);

export { auth }; // Make sure to export the auth variable


// export const auth =getAuth(app);

export default function(){
  <>Nothing is here</>
}