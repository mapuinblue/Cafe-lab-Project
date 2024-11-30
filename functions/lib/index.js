"use strict";

const functions = require("firebase-functions");
const admin = require("firebase-admin");
admin.initializeApp();

exports.helloWorld = functions.https.onRequest((request, response) => {
  console.log("Hello from Firebase!");
  response.send("Hello from Firebase!");
});
