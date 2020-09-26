import firebase from "@firebase/app";
import "@firebase/firestore";

try {
  firebase.initializeApp({
    apiKey: "AIzaSyDYGe97n18UJ4ChH0qdGlXMoV5sSyIxUkI",
    authDomain: "dragons280.firebaseapp.com",
    databaseURL: "https://dragons280.firebaseio.com",
    projectId: "dragons280",
    storageBucket: "dragons280.appspot.com",
    messagingSenderId: "719161704128",
    appId: "1:719161704128:web:59d84dad29b9e5ab46b725"
  });
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error raised", err.stack);
  }
}

export const db = firebase.firestore();

export default {
  data: function () {
    return {
      username: this.$cookies.get("username")
    };
  },

  newPers(nome, sesso, razza, classe, equipaggiamento, username) {
    return db.collection("personaggi").doc().set({
      nome: nome,
      sesso: sesso,
      razza: razza,
      classe: classe,
      equipaggiamento: equipaggiamento,
      username: username
    });
  },
  newUser(username) {
    return db.collection("users").add({
      username: username
    });
  }
};
