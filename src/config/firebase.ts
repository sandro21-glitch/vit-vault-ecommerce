import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB9tG_d1aGPXhJ5jU8UToebGsOTcMNqdmg",
  authDomain: "vitvault-47c5f.firebaseapp.com",
  projectId: "vitvault-47c5f",
  storageBucket: "vitvault-47c5f.appspot.com",
  messagingSenderId: "97791255698",
  appId: "1:97791255698:web:20efe72793a152e46a724b",
  measurementId: "G-NS58NJ0RSS",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)