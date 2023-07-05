// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDoWSZF4QIZONAW0-BU4JSoQ441xzOig3s",
  authDomain: "fir-pro-7df22.firebaseapp.com",
  projectId: "fir-pro-7df22",
  storageBucket: "fir-pro-7df22.appspot.com",
  messagingSenderId: "224618752426",

  appId: "1:224618752426:web:b9ec1bf896847c6b93a3d3",
  measurementId: "G-XNN9CMKJ5Z",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

export { auth, app };
