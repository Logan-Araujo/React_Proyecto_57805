import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCTRauGRgXXHXzgE9kAzGCIZYz1LDfbThs",
  authDomain: "my-ecommerce-4467c.firebaseapp.com",
  projectId: "my-ecommerce-4467c",
  storageBucket: "my-ecommerce-4467c.appspot.com",
  messagingSenderId: "616998212618",
  appId: "1:616998212618:web:7923cbe8a1af88eb347bf3"
};

const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
