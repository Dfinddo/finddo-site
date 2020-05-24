// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'http://192.168.1.4:3000',
  moipUrl: 'https://connect-sandbox.moip.com.br',
  moip_client_id: 'APP-L19C3C1HX0RG',
  moip_client_secret: '128e92420ed54ae8b2f0b63984b8a8b8',
  moip_redirect_uri: 'http://192.168.1.4:4200/redirect',
  moip_bearer_token: 'Bearer 54def05c45b94a14ab78b18329eae59b_v2'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
