import * as firebase from "firebase";

const config = {
  apiKey: "AIzaSyAKxTCZnQQnUlo7-dArQ5Sj4BgRtg---pA",
  authDomain: "df-goal-coach.firebaseapp.com",
  databaseURL: "https://df-goal-coach.firebaseio.com",
  projectId: "df-goal-coach",
  storageBucket: "",
  messagingSenderId: "81430520310"
};

export const firebaseApp = firebase.initializeApp(config);
