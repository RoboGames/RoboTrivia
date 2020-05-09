import firebase from 'firebase/app';
import 'firebase/database';

var firebaseConfig = {
    apiKey: "AIzaSyC-EOfx9305TGGXDP9lYpjjXpI8s06haLc",
    authDomain: "robo-games.firebaseapp.com",
    databaseURL: "https://robo-games.firebaseio.com",
    projectId: "robo-games",
    storageBucket: "robo-games.appspot.com",
    messagingSenderId: "673193781123",
    appId: "1:673193781123:web:3d586b0a488a47979938b6"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


  // A basic function that on submit pushes user data to firebase
// Instead of onSubmit need to find a way for this to fire on game end - perhaps with a gameend function
// handleSubmit(event) {
//     event.preventDefault();
//     const dbRef = firebase.database().ref()
//     const playerInfo = {
//         userName: this.state.allPlayers.nickname,
//         userScore: this.state.allPlayers.score,
//     }
//     dbRef.push(playerInfo)
// }

// Displaying the highscores will be a simple map function of on componentDidMount that as well checks to make sure theres no empty data
 // Pull our database data and push the values into the notes array
// componentDidMount() {
//     const dbRef = firebase.database().ref();
//     dbRef.on('value', (result) => {
//         const data = result.val();
//         const playerArray = []
//         for (let key in data) {
//             playerArray.push({
//                 userName: data[key].userName,
//                 userScore: data[key].userScore
//             })
//         }
//         this.setState({
//             highscores: noteArray
//         })
//     })
// }