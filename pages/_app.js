import "../styles/index.scss";
import "../styles/gallery.scss";
import "../styles/media-container.scss";
import "../styles/contact.scss";
import "../styles/sponsors.scss";
import "swiper/swiper.scss";
import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDWI8YagdKD0kOqQ3JKZHg2W0ajl8wFpvs",
  authDomain: "pelusimb.firebaseapp.com",
  projectId: "pelusimb",
  storageBucket: "pelusimb.appspot.com",
  messagingSenderId: "657564698556",
  appId: "1:657564698556:web:935aa4bd54ebf57b52cdb9",
  measurementId: "G-SC414VR160",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
