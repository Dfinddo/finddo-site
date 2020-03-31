// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.4:3000',
  moipUrl: 'https://connect-sandbox.moip.com.br',
  moip_client_id: 'APP-3ZE5RL6VF6OA',
  moip_client_secret: '5a384a3f54c7401e969bc1c9a81360bf',
  moip_redirect_uri: 'http://192.168.1.4:4200/redirect',
  moip_bearer_token: 'Bearer 4051205e2b5643ac860863f0433701dd_v2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
