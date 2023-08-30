import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import App from './App.jsx';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBmJs0p3lfrdvOYLckTO6O5wt5w2sNj7M',
  authDomain: 'todayrugs.firebaseapp.com',
  projectId: 'todayrugs',
  storageBucket: 'todayrugs.appspot.com',
  messagingSenderId: '639658357473',
  appId: '1:639658357473:web:e090a7b89c2874a9e2bda0'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
