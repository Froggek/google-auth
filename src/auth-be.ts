
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'; 

const auth = getAuth(); 

createUserWithEmailAndPassword(auth, "blougi@boulga.com", "Blougi")
  .then((userCredentials) => {
    const user = userCredentials.user; 
    console.log(user); 
  })
  .catch((error) => {
    console.log(error.code + ': ' + error.message); 
  }); 

signInWithEmailAndPassword(auth, "blougi@boulga.com", "Blougi").then(
  (userCredentials) => {
    const user = userCredentials.user; 
    console.log(user); 
  }
).catch((err) => {
  console.log(err.code + ': ' + err.message); 
}); 

onAuthStateChanged(auth, (user) => {
  if (user) 
    console.log("AuthN state has changed: " + user.uid); 
  
  else 
    console.log("AuthN state has changed: NULL"); 
}); 



