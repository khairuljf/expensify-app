
import { initializeApp } from 'firebase/app';
import { getDatabase,  ref, set, remove, onValue, on, once , get, child } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkDAD29HuVNj99COC4k6fdLxBvKZxLAeQ",
    authDomain: "rosy-gantry-315006.firebaseapp.com",
    databaseURL: "https://rosy-gantry-315006-default-rtdb.firebaseio.com",
    projectId: "rosy-gantry-315006",
    storageBucket: "rosy-gantry-315006.appspot.com",
    messagingSenderId: "830529556566",
    appId: "1:830529556566:web:46fa29f8b007010c44ebf7",
    measurementId: "G-J2MKZ6QTMJ"
};




const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// firebase.initializeApp(firebaseConfig);
//
// var database = firebase.getDatabase();

// Initialize Firebase
//const app = initializeApp(firebaseConfig);

// const app = initializeApp(firebaseConfig);
//
// const database =  getDatabase(app)





// setTimeout(()=>{
//     set(ref(database,'users' ),{
//         name:'josim',
//         age :28
//     })
// },1500)





// get(child(data, `users/1`)).then((snapshot) => {
//     if (snapshot.exists()) {
//         console.log(snapshot.val());
//     } else {
//         console.log("No data available");
//     }
// }).catch((error) => {
//     console.error(error);
// });

// const dataRef = database('users')
//
// dataRef.once('value').then((snapshot)=>{
//     const data = snapshot.val();
//     console.log(data)
// }).catch((error)=>{
//     console.log("error", error)
// })



// get(child(dataRef, 'users/1')).then((snapshot)=>{
//     if(snapshot.exists()){
//         console.log(snapshot.val());
//     }else{
//         console.log("No data available")
//     }
// }).catch((error)=>{
//     console.log("error", error)
// })




// const hello = once(dataRef, (snapshot)=>{
//     const data = snapshot.val();
//     console.log(data)
// } )

//console.log("hello", hello)

    // set(
    //
    //     ref(database, 'users/' + 1), {
    //         username: 'khairul',
    //         email: 'khairuljf@gmail.com',
    //         profile_picture : 'www.khairuljf.com'
    //      }
    //
    //     ).then(()=>{
    //         console.log("data Saved")
    // }).catch((error)=>{
    //     console.log("Eroor:", error);
    // });

// remove(ref(database)).then(()=>{
//     console.log("Data has been removed");
// }).catch((error)=>{
//     console.log('Error:', error)
// })



