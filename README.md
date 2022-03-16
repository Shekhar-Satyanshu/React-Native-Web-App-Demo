# React-Native-Web-App-Demo

## Steps for adding react native web

## Create index.html for the web app
Need to create a new folder public/ and add a new index.html file:

```html
<!DOCTYPE html>
<html lang="en">

    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <meta name="theme-color" content="#000000">
        <title>React App</title>
    </head>

    <body>
        <noscript>
            You need to enable JavaScript to run this app.
        </noscript>
        <div id="root"></div>
    </body>

</html>
```
* Take attention to the id of the DIV element (in this case root), your web app will be loaded here.
## Create, move, duplicate and rename
```cmd
mkdir src/
mv app.json src/
mv App.js src/
cp index.js src/
mv index.js index.native.js
```
## Update imports’ paths in index.native.js
```js
import {AppRegistry} from 'react-native';
-import App from './App';
-import {name as appName} from './app.json';
+import App from './src/App';
+import {name as appName} from './src/app.json';
 
 AppRegistry.registerComponent(appName, () => App);
```
## Remove react-native example components
```js
-import {
-  Header,
-  LearnMoreLinks,
-  Colors,
-  DebugInstructions,
-  ReloadInstructions,
-} from 'react-native/Libraries/NewAppScreen';
```
## Add runApplication() for the web app
You need to add runApplication() to src/index.js (the entry point of the web app) to load the web app correctly.
```js
import {AppRegistry} from 'react-native';
  import App from './App';
  import {name as appName} from '../app.json';

  AppRegistry.registerComponent(appName, () => App);
+ AppRegistry.runApplication(appName, {
+   rootTag: document.getElementById('root'),
+ });
```
* Take attention to use same id (in this case root) of public/index.html (see previous chapter Create index.html for the web app).
## Add react-scripts, react-native-web, react-dom
```cmd
npm install react-dom react-native-web
npm install --dev react-scripts
```
## Maintain the tests
To continue to run tests, you have to update references of _tests__/App-test.js:
```js
import 'react-native';
 import React from 'react';
-import App from '../App';
+import App from '../src/App';
```
## You need to add web task to package.json to run the web app
```json
"scripts": {
    "android": "react-native run-android",
    "ios": "react-native run-ios",
+   "web": "react-scripts start",
    "start": "react-native start",
    "test": "jest",
    "lint": "eslint ."
  },
```
## It’s time to run and test all: iOS, Android and Web platform.
### Run native server:
```cmd
npm start
```
## Run in all platform
```cmd
npm run ios
npm run android
npm run web
```
## Now you should see your app running on web on http://localhost:3000/.

## HAPPY CODING 👨‍💻
