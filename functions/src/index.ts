// import * as functions from "firebase-functions";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });


import { getAuth, connectAuthEmulator } from "firebase/auth"; 

const auth = getAuth(); 
connectAuthEmulator(auth, 'http://localhost:9099'); 


