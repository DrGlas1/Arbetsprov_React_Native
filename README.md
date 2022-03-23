Setting up developer environment
======================

The app is developed using React Native in Expo Go. To set up the developer environment there are a few prerequisite programs to install covered in the next section.

Prerequisites
---------------------

These programs need to be installed before the Expo environment can be setup, follow the links to install.
[Node.js LTS release](https://nodejs.org/en/)
[Git](https://git-scm.com/)
[Watchman](https://facebook.github.io/watchman/docs/install#buildinstall) for macOS or Linux users.

Installing Expo CLI
---------------------

Run this command in the terminal to install Expo CLI.
```
$ npm i -g expo-cli
```
Also useful is to donwload Expo Client on the AppStore for IPhone/Android to easily be able to test the app on the respective devices. 

Starting development
---------------------

When everything else is set up, clone the repository and navigate to the CityPopApp-folder.
```
$ git clone 
```

File structure of components
======================
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
