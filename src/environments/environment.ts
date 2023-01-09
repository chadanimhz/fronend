// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  API_URL:'http://localhost:8086/api/',
  firebaseConfig: {
    apiKey: "AIzaSyDHu12DuLirZcz2pQVlRT024kGOoWRHV_Q",
    authDomain: "gmh-chadani.firebaseapp.com",
    databaseURL: "https://gmh-chadani-default-rtdb.firebaseio.com",
    projectId: "gmh-chadani",
    storageBucket: "gmh-chadani.appspot.com",
    messagingSenderId: "711102110873",
    appId: "1:711102110873:web:3a666a17e5a1009c792c08"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
