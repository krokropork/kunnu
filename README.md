# Kunnu

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0-rc.1.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Running install firebase
Run `npm install -g firebase-tools`to execute for Development with [Firebase](https://console.firebase.google.com).

## Running Init firebase
Run  `firebase login` and `firebase init` to intial new firebase.

What Firebase CLI features do you want to setup for this folder? – Hosting.
If it asks you which Firebase project do you want to associate as default, select the correct project.
What file should be used for Database Rules? – Just click enter since we’ll not be using the database for our. application.
What do you want to use as your public directory? – Type in dist and hit enter (this is because when you run a build. with Angular CLI, the compiled code that should be deployed is located in this directory).
Configure as a single-page app? – Yep.

## Running deployed firebase
Run  `ng build --prod` and `firebase deploy`
Firebase will provide a URL which you can use to access your application online. 
You can also use a custom domain.
The custom domain configurtion can be found in the Firebase console backend.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
