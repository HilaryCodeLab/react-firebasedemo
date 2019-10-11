import firestore from 'firebase/firestore';
import * as firebase from "firebase";

const settings={timestampsInSnapshots:true,};

const config={
    apiKey: "AIzaSyAh-3AHEzxX4OJZlEm07TSx2Rropq95AeI",
    authDomain: "c4progs2-mad-rfb.firebaseapp.com",
    databaseURL: "https://c4progs2-mad-rfb.firebaseio.com",
    projectId: "c4progs2-mad-rfb",
    storageBucket: "c4progs2-mad-rfb.appspot.com",
    messagingSenderId: "942770034448",

};

firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;