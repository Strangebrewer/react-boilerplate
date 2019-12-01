# React Boilerplate

   This is my boilerplate React app. It allows me to just dive in and start building a project without having to worry about all the things that don't change much from one app to next, at least for me. Having authentication already setup means I don't have to think through it every time or copy it from another project, and it also provides examples for all the main pieces of the app: routes, controllers, models and schemas on the back end and actions & mutations, api, pages and components on the front end.
   
   To use this boilerplate as-is, you'll need a MongoDB Atlas account, and you'll need to add a .env file to fill in the details of the Mongo connection string in connection.js. And, of course, you'll have to `npm install` before you can start it up.   
   
## Tooling includes:
   - [Redux](https://www.npmjs.com/package/redux). Redux isn't always necessary, but I usually use it anyway because we use it at work and this helps me keep learning. I may make a boilerplate without Redux in the future.
   - [Redux Thunk](https://www.npmjs.com/package/redux-thunk).
   - [Styled Components](https://www.npmjs.com/package/styled-components). I find this much easier than trying to manage style sheets.
   - [esm](https://www.npmjs.com/package/esm). This allows me to write ES6 modules on the backend.