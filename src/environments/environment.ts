// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  auth0: {
    uri: 'https://80chars.auth0.com/oauth/token',
    config: {
      client_id: 'TbhzLaNzj12ZMUAOze3TRrmE6mHYrS57',
      client_secret: 'QNeft6IeXuOGZstM9zbGoq0yEpevr0IfHYD2QXDgVXZAewd-J6Kyqpt5fV0I1HKW',
      audience: 'localhost',
      grant_type: 'client_credentials'
    }
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
