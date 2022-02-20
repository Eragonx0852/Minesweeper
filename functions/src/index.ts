import * as functions from 'firebase-functions';
import { request } from 'https';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript

export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info('Hello logs!', { structuredData: true });
  response.send('Hello from Firebase!');
});

export const generateGame = functions.https.onRequest((request, response) => {
  //receive board size and bomb count
  //create board
  //store board in document
  //return document id for player to load game
});
