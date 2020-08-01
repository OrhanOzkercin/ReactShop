import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
	apiKey: 'AIzaSyCTMuC41LqOTHXBXINKdKYobFpiz6mBzd4',
	authDomain: 'react-shop-c9a08.firebaseapp.com',
	databaseURL: 'https://react-shop-c9a08.firebaseio.com',
	projectId: 'react-shop-c9a08',
	storageBucket: 'react-shop-c9a08.appspot.com',
	messagingSenderId: '604818431860',
	appId: '1:604818431860:web:0a1bb0785d6f938c439621',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;
