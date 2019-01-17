// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
//import { VARS_CONFIG } from "./env_vars";

export const environment = {
  production: false,
  apiUrl: 'https://pokeapi.co/api/v2/',
  firebaseConfig: {
    apiKey: "AIzaSyA0vOQvjNw2rfTqACtPfDHzjbozLI5n9zo",
    authDomain: "poketest-ef958.firebaseapp.com",
    databaseURL: "https://poketest-ef958.firebaseio.com",
    projectId: "poketest-ef958",
    storageBucket: "poketest-ef958.appspot.com",
    messagingSenderId: "465416200077"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
