// Import the necessary functions from the Firebase SDK
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";  // Import the Authentication module
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARoOKhu7c449tKs36MfogkhEiSIVUKy-0",
  authDomain: "geotecal-3e726.firebaseapp.com",
  projectId: "geotecal-3e726",
  storageBucket: "geotecal-3e726.firebasestorage.app",
  messagingSenderId: "420361611504",
  appId: "1:420361611504:web:bd5f1db929867d27b73a35",
  measurementId: "G-FCXF6VW2VY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
const auth = getAuth(app);

// Optionally, initialize Firebase Analytics (if needed)
const analytics = getAnalytics(app);

// Export the `auth` instance to use in other parts of your app
export { auth, analytics };
