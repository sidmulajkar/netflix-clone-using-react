import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

//we need to somehow seed the database

//we need a config here, put your api details here 
const config = {
    apiKey: "AIzaSyD6rfFIRNC4j0YoRtZGi6vLlJ0M2baoffE",
    authDomain: "netflix-react-9480e.firebaseapp.com",
    projectId: "netflix-react-9480e",
    storageBucket: "netflix-react-9480e.appspot.com",
    messagingSenderId: "124358470674",
    appId: "1:124358470674:web:e265ab9bc66f7c4e9a3ccb"
};

const firebase = Firebase.initializeApp(config);

//dont uncomment this bcz it will dupliacte the database on firebase
//seedDatabase(firebase);

export { firebase };