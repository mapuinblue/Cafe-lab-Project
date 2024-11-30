"use strict";
/**
 * Import function triggers from their respective submodules:
 *
 * import { onCall } from "firebase-functions/v2/https";
 * import { onDocumentWritten } from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */
const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

// Example of an HTTP function
exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase!");
});
