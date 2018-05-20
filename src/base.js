import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyA8t410JEWobFXRXwpjwR3ihnvVmcqt-is",
  authDomain: "catch-of-the-day-react-t-55ce2.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-react-t-55ce2.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
