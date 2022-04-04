# Learning-React

## Resources 
1. [Youtube](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)
2. [Official Documentation](https://reactjs.org/docs/getting-started.html)
3. [Interview Questions](https://www.toptal.com/react/interview-questions)
4. [React Typescript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
5. [The React Workshop](https://www.nlb.gov.sg/biblio/205442480)

## Create React App 
`npx create-react-app tutorial-app`

`cd tutorial-app`

## JSX Example
```jsx
<div
  className = 'jsx-example'
  style = {{background : 'white'}}
  onClick = {{() => alert('Hello World')}}>
```

### Commands
- `npm start`
  - Starts the development server
- `npm run build`
  - Bundles the app into static files for production.
- `npm test`
  - Starts the test runner
- `npm run eject`
  - Removes this tool and copies build dependencies, configuration files and scripts into the app directory.


## Tips
### For Windows Users who prefer to use WSL2.
- Purpose : To enable Hot Reload (while your application is running, you can make changes to the code and apply them to the running application [Link](https://blog.jetbrains.com/dotnet/2021/12/02/how-rider-hot-reload-works-under-the-hood/#:~:text=let's%20dive%20in!-,What%20does%20Hot%20Reload%20do%3F,your%20application%20is%20kept%20intact.))
  - Reason : WSL2 changed the file sharing protocol, from using their own custom developed protocol using the 9P protocol, which does not support file changes event for Create React App. [Link](https://github.com/facebook/create-react-app/issues/10253)
  - Solution : Move React App folder into **/home/%USER%** or simply **~/** instead of **/mnt/c/Users/%USER%/...**
  - There is **NO** need to run the app with configurations FAST_REFRESH=true and CHOKIDAR_USEPOLLING=true.
  - Other suggestions include downgrading the react-scripts from 5.0.0 to 4.0.3 (Did not test)