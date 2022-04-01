# package.json

## name
```json
"name" : "the-react-workshop"
```
This key indicates the name of the project.

## version
```json
"version" : "1.2.3"
```
This key indicates the version of the project. <br>
- Major version (major rewrites) : 1
- Minor version (large changes that do not affect backward compatibility) : 2
- Patch version (bug fixes, hotfix, security updates) : 3

## private
```json
"private" : true
```
This key tells npm if the project is public or private

## dependencies
```json
"dependencies": {
    "@testing-library/jest-dom": "^5.16.3",
    "@testing-library/react": "^12.1.4",
    "@testing-library/user-event": "^13.5.0",
    "npm-watch": "^0.11.0",
    "react": "^18.0.0",
    "react-dom": "^18.0.0",
    "react-scripts": "5.0.0",
    "web-vitals": "^2.1.4"
  },
```
This key indicates the libaries that the project depends on.

## scripts
```json
"scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject",
    "watch": "npm-watch"
  },
```
This key indicates the commands.

## eslintConfig
```json
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
```
This key tells the code linter to use create-react-app style linting.

## browsersList
```json
"browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
```
This key indicates the browsers that should be targeted when starting the app. <br>
[Interview Question](https://stackoverflow.com/questions/55510405/what-is-the-significance-of-browserslist-in-package-json-created-by-create-react)
