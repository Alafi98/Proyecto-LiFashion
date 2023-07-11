
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js";
 import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";


 
 const firebaseConfig = {
   apiKey: "AIzaSyCEe1KYMHmjKmMBCGlaBsWMmNG1bi_5mUQ",
   authDomain: "li-fashion-e5db1.firebaseapp.com",
   projectId: "li-fashion-e5db1",
   storageBucket: "li-fashion-e5db1.appspot.com",
   messagingSenderId: "821847268184",
   appId: "1:821847268184:web:63ee0329742adef84aa32d",
 };



 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);

 async function getUsers(database) {
  const userCollection = await collection(database, 'users');
  const result = await getDocs(userCollection);
  const userList = result.docs.map(doc => doc.data());
  return userList;
 }

 try {
    getUsers(db).then(response => console.log(response));
 } catch(err) {
  console.log(err);
 }
