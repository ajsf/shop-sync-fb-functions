const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.saveUser = functions.auth.user().onCreate(user => {
  console.log(user);
  return admin
    .database()
    .ref(`/users/${user.uid}`)
    .set({ name: user.displayName, email: user.email });
});
