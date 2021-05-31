import React from "react";
import GalleryImgs from "react-grid-gallery";
import Layout from "../components/layout";
//Si lo borro acá y lo pongo en layout no funciona. Si lo borro de layout y lo vuelvo a poner acá me dice que está duplicado ?????
import firebase from "firebase/app";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDWI8YagdKD0kOqQ3JKZHg2W0ajl8wFpvs",
  authDomain: "pelusimb.firebaseapp.com",
  projectId: "pelusimb",
  storageBucket: "pelusimb.appspot.com",
  messagingSenderId: "657564698556",
  appId: "1:657564698556:web:935aa4bd54ebf57b52cdb9",
  measurementId: "G-SC414VR160",
};

firebase.initializeApp(firebaseConfig);

/*
let btt = document.getElementById("pruebita");
btt.addEventListener("click", (e) => {
  e.preventDefault();
  logConGoogle();
});
*/

function logConGoogle() {
  const provider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(provider)
    .then((result) => console.log("Logueo", result.user.email))
    .catch((error) => console.log(error.message));
}

const IMAGES = [
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
  {
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 174,
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail:
      "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
    tags: [
      { value: "Ocean", title: "Ocean" },
      { value: "People", title: "People" },
    ],
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail:
      "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 320,
    thumbnailHeight: 212,
  },
];

//Le cambié el nombre a la función porque sino entra en conflicto con el componente que se importa del grid

function Gallery() {
  return (
    <Layout title="Galería | Simbiosis">
      <main>
        <a href="" onClick={logConGoogle}>
          {" "}
          Pruebita
        </a>
        <h1 className="mb-5">Galería</h1>
        <GalleryImgs images={IMAGES} enableImageSelection={false} />
      </main>
    </Layout>
  );
}

export default Gallery;
