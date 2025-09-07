// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyDyQft0rebKODtE2om_tRtYYmjdpd4ahzA",
	authDomain: "growthh1.firebaseapp.com",
	projectId: "growthh1",
	storageBucket: "growthh1.firebasestorage.app",
	messagingSenderId: "1044453032237",
	appId: "1:1044453032237:web:390b52c2e15eb637e153a4",
	measurementId: "G-GH6Z2WBQ23",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
