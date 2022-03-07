export const environment = {
  firebase: {
    projectId: 'minesweeper-a74df',
    appId: '1:332031760647:web:e174aef0669f9785a10da2',
    storageBucket: 'minesweeper-a74df.appspot.com',
    apiKey: 'AIzaSyDEqB0O23x6JENTrRV3nKgJuuIgErj7qto',
    authDomain: 'minesweeper-a74df.firebaseapp.com',
    messagingSenderId: '332031760647',
  },
  emulators: {
    firestore: {
      host: '',
      port: 8080,
    },
    auth: {
      uri: '',
    },
    functions: {
      host: '',
      port: 5001,
    },
    storage: {
      host: '',
      port: 9199,
    },
  },
  production: true
};
