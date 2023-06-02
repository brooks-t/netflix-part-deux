import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
	apiKey: "AIzaSyBripuLfoOjCHvaKUxcadC-g4alClgCPp8",
	authDomain: "netflix-part-deux.firebaseapp.com",
	projectId: "netflix-part-deux",
	storageBucket: "netflix-part-deux.appspot.com",
	messagingSenderId: "9253868013",
	appId: "1:9253868013:web:3092c8f40f66fc55bd17e4",
	measurementId: "G-5Q8L9T802G",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
