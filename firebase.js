import { initializeApp } from "https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import {
    getDatabase,
    ref,
    onValue,
    set
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyC6TUKm2I5pYpPlNCIY7gASl06MplP_hjY",
    authDomain: "secret-room-319fe.firebaseapp.com",
    databaseURL: "https://secret-room-319fe-default-rtdb.firebaseio.com",
    projectId: "secret-room-319fe",
    storageBucket: "secret-room-319fe.firebasestorage.app",
    messagingSenderId: "214756973087",
    appId: "1:214756973087:web:33cdd57004c3955aec132a"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {
    database,
    ref,
    onValue,
    set
};