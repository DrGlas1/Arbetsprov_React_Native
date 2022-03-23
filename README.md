About
======================

CityPop is an app that is used to display cities population count developed using React Native and Expo Go. In the `CityPopApp` folder is the main file, `App.js`.
The rest of the components are in the `app` folder and its subfolder.

Folder structure of components
---------------------

This shows the folder structure inside the CityPopApp-folder with quick explanations of the contents.
```
├───app             - Folder containing all the different components and files that make upp the app
│   ├───assets      - Folder containing images used for backgrounds to screens
│   ├───buttons     - Buttons for displaying information and switching between screens when pressed
│   ├───config      - Config file with some shared styles and colors 
│   ├───list        - List components for showing data
│   ├───logo        - Component for displaying screen titles
│   ├───screens     - The base components that take subcomponents and bring them togheter into a screen
│   └───searchbars  - A component for taking and displaying user input
```

For more information regarding the project, see `manual.pdf`

Setting up developer environment
======================

To set up the developer environment there are a few prerequisite programs to install covered in the next section.

### Prerequisites

These programs need to be installed before the Expo environment can be setup, follow the links to install.
[Node.js LTS release](https://nodejs.org/en/)
[Git](https://git-scm.com/)
[Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS or Linux users.

### Installing Expo CLI

Run this command in the terminal to install Expo CLI.
```
$ npm i -g expo-cli
```
Also useful is to donwload Expo Client on the AppStore for IPhone/Android to easily be able to test the app on the respective devices. 

Starting development
---------------------

When everything else is set up, clone the repository and navigate to the CityPopApp-folder.
```
$ git clone https://github.com/DrGlas1/Arbetsprov_React_Native.git
$ cd .\CityPopApp\
```
To start the server run the following command:
```
$ npm start
```

There will show up a link to open Expo Developer Tools to run the app in a web browser or open it up in an IPhone/Android simulator. Alternatively, the app can also be run on a Iphone/Android using the Expo Client app by scanning the QR-code.

To stop the development server from running, press `Ctrl+C`.



