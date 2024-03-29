# Learning-React

## Resources 
1. [[Youtube] React Tutorials](https://www.youtube.com/watch?v=OxIDLw0M-m0&list=PL4cUxeGkcC9ij8CfkAY2RAGb-tmkNwQHG)
2. [[Youtube] Best Practices](https://www.youtube.com/watch?v=5r4LlVAFrd0)
3. [[Youtube] React Antipatterns](https://www.youtube.com/watch?v=b0IZo2Aho9Y)
4. [[Documentation] React](https://reactjs.org/docs/getting-started.html)
5. [[Documentation] Recoil](https://recoiljs.org/docs/introduction/installation)
6. [[Documentation] Jest](https://jestjs.io/docs/getting-started)
7. [[Documentation] Styled Components](https://styled-components.com/docs)
8. [[Interview] Questions](https://www.toptal.com/react/interview-questions)
9. [[Miscellaneous] React Typescript Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/docs/basic/setup)
10. [[Textbook] The React Workshop](https://www.nlb.gov.sg/biblio/205442480)
11. [[Medium] Mastering Drag & Drop with ReactJS"](https://engineering.datorama.com/mastering-drag-drop-with-reactjs-part-01-39bed3d40a03)
12. [[Youtube] Drag & Drop ](https://www.youtube.com/watch?v=mbihHtIy67o&t=89s)
13. [[Documentation] Vite](https://vitejs.dev/guide/#scaffolding-your-first-vite-project)
14. [[Medium] Vite over CRA](https://medium.com/codex/you-should-choose-vite-over-cra-for-react-apps-heres-why-47e2e7381d13)

## JSX
```jsx
<div
  className = 'jsx-example'
  style = {{background : 'white'}}
  onClick = {{() => alert('Hello World')}}>
```

## Commands
- `npm start`
  - Starts the development server
- `npm run build`
  - Bundles the app into static files for production.
- `npm test`
  - Starts the test runner
- `npm run eject`
  - Removes this tool and copies build dependencies, configuration files and scripts into the app directory.

## Tips
### React
1. Relative imports outside of src/ are not supported.
2. Class names of div (with styles specified in css) should not contain '-' as concatenation. It should use " ", else the div will not render.

### React Lifecycle
1. The initial mount lifecycle
  - This is when React attempts to build the component before pushing it into the DOM.
  - The mount lifecycle is called twice: before and immediately after React renders the component into the DOM.
  - The `componentDidMount()` lifecycle method is better suited for functions that take an indeterminate amount of time to load. `componentDidMount()` is called after `render()` is called, so you don't get any weird behaviour where the component takes a long time before it actually shows up on the page.
  - One common best practice is to render an elemnt that informs the reader that the page is loading, rather than having the initializing state to be empty.
  ```js
  constructor()
  static getDerivedStateFromProps()
  render()
  componentDidMount()
  ```

2. The update lifecycle
  - This is when the component has been loaded and is in a state of watching for updates
  - `componentDidUpdate(prevProps, prevState, snapshot)`
    - `prevProps` is the shape of the component's props before the update happened.
    - `prevState` is the shape of the component's state before the update happened.
    - `snapshot` is the virtual representation of the component before the update.
  ```js
  static getDerivedStateFromProps()
  shouldComponentUpdate()
  render()
  getSnapshotBeforeUpdate()
  componentDidUpdate()
  ```

3. The unmount lifecycle
  - This only comes into play when a component is removed from the DOM.
  ```js
  componentWillUnmount()
  ```

### [Hooks](https://reactjs.org/docs/hooks-reference.html)
1. `useState`
  ```js
  const [state, setState] = useState(initialState);
  ```
  - Returns a stateful value, and a function to update it.
  - `setState(newState)` is used to update the state.

2. `useEffect`
  - Accepts a function that contains imperative, possibly effectful code.
  - The function passed to useEffect will run after the render is committed to the screen
  ```js
    useEffect(() => {
      const subscription = props.source.subscribe();
        return () => {
          // Clean up the subscription
          subscription.unsubscribe();
        };
      });
  ```
  - For conditional firing of effects, pass a second argument which is the array of values that changes.
  ```js
    useEffect(() => {
      const subscription = props.source.subscribe();
        return () => {
          // Clean up the subscription
          subscription.unsubscribe();
        };
      },
      [valuesThatChange]);
  ```

3. `useContext`
  - Accepts a context object (the value returned from React.createContext) and returns the current context value for that context
  - A component calling useContext will always re-render when the context value changes
  - Refer to `./the-react-workshop/apps/useContext.example.js`

4. `useReducer`
  ```js
  const [state, dispatch] = useReducer(reducer, initialArg, init);
  ```
  - Accepts a reducer of type (state, action) => newState, and returns the current state paired with a dispatch method
  - Refer to `./the-react-workshop/apps/useReducer.example.js`

5. `useCallback`
  ```js
  const memoizedCallback = useCallback(() => {doSomething(a, b);},[a, b],);
  ```
  - Returns a memoized callback.
  - memoization or memoisation is an optimization technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again

6. `useMemo`
  ```js
  const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
  ```
  - Returns a memoized value.
  - Pass a “create” function and an array of dependencies. useMemo will only recompute the memoized value when one of the dependencies has change
  - If no array is provided, a new value will be computed on every render.

7. `useRef`
  ```js
  const refContainer = useRef(initialValue);
  ```
  - returns a mutable ref object whose .current property is initialized to the passed argument (initialValue).
  - The returned object will persist for the full lifetime of the component.
  - Essentially, useRef is like a “box” that can hold a mutable value in its .current property.

8. `useImperativeHandle`
  ```js
  useImperativeHandle(ref, createHandle, [deps])
  ```
  - useImperativeHandle customizes the instance value that is exposed to parent components when using ref

9. `useLayoutEffect`
  - The signature is identical to useEffect, but it fires synchronously after all DOM mutations. 
  - Use this to read layout from the DOM and synchronously re-render.
  - Prefer the standard useEffect when possible to avoid blocking visual updates.

10. `useTransition`
  ```js
  const [isPending, startTransition] = useTransition();
  ```
  - Returns a stateful value for the pending state of the transition, and a function to start it.

11. `useId`
  ```js
  const [isPending, startTransition] = useTransition();
  ```
  - A hook for generating unique IDs that are stable across the server and client, while avoiding hydration mismatches.

### Formik
Formik resolves how we handle complex forms in React. (i.e. multiple embedded forms, dynamic fields and validation)
Formik stores the form state locally and not globally.
Advantages:
  1. Easy to integrate.
  2. Easy to understand.
  3. Easy to configure.
- `resetForm` is used to reset the form back to the initial values
- `validateField` is used to trigger a specific field validation.
- `setTouched` is used when we want to mark the field as touched or visited.
- `setStatus` is used when we want to attacha custom status property to our form (i.e. isApproving, isValidating)
- `onReset` is triggered just before the form is reset back to its initial values.
- `validate`, `validateOnBlur`, `validateOnChange`, `validateSchema` are triggered in cases when we want to validate the form.

### Best Practices
1. Prevent unnecessary renders of other components by initializing state locally in the component.
```js
const App = () => {
  return(
    <div className='App'>
      <ChangeColor />
      <DummyChildComponent />
    </div>
  )
};
```
  - State updates in ChangeColor does not re-render DummyChildComponent.

2. Prevent adding unnecessary nodes into the DOM by using [Fragments](https://reactjs.org/docs/fragments.html).
  - Syntax : 
```js
    <React.Fragment>
      <ChangeColor />
      <DummyChildComponent />
    </React.Fragment>
```
  - Fragments declared with the explicit <React.Fragment> syntax may have keys.
  - Short Syntax :
```js
    <>
      <ChangeColor />
      <DummyChildComponent />
    </>
```

3. `useState(object)` or `useState(atom)` ? [Article](https://blog.thoughtspile.tech/2021/10/11/usestate-object-vs-multiple/)
  - Consider only grouping closely related state items into an object. 
  - Benefits of using useState on atomic states reduces the bundle size, and allow custom hooks to be used for a specific state.

4. Type Checking using PropTypes.
```js
DisplayDetails.PropTypes ={
  name : PropTypes.string,
  age : PropTypes.number,
  isMarried : PropTypes.bool
};
```
5. Define Child Component outside of the Parent Component and pass function in as a prop
```js
const Child = ({onClick}) => {
  return <button onClick={onClick}>+</button>
}
```

6. Memoization `useMemo()`
```js
const profit = () => {
  const [profit, setProfit] = useState(0);
  const [numberOfStocks, setNumberOfStocks] = useState(0);

  // expensiveCalculation only runs when the dependent data changes.
  const total = useMemo(() => expensiveCalculation(numberOfStocks), [numberOfStocks])
}
```

7. One Component per directory.
```
src
|-- NavBar
    |-- index.tsx
    |-- NavBar.css
    |-- NavBar.tsx
```
  - `index.tsx` should contain `export {default} from './NavBar'`.
  - We can then import NavBar from the directory `import NavBar from './NavBar'`

8. [Dynamic Importing(https://reactjs.org/docs/code-splitting.html)]
```js
const Button = React.lazy(()=> import('./Button'))
```

9. Handling multiple props
```js
const data = {
  name : 'Sean',
  age : 27,
  email : 'email@email.com',
  hasDog : false
};

<User {...data} />
```

10. Currying 
```js
const handleIt = (n) => {
  return (e) => console.log(e,v)
}
```
- The "[currying](https://stackoverflow.com/questions/36314/what-is-currying#:~:text=The%20%22currying%22%20is%20the%20process,function%2C%20return%20the%20actual%20result.)" is the process of taking the function of multiple arguments and converting it into a serious of functions that each take a single argument and return a function of a single argument, or in the case of the final function, return the actual result.

### Vite
An option over create-react-app is using Vite.

`npm init vite@latest my-react-app --template react`

Vite is faster (in terms of start-time and spinning a dev server) for large-scale projects because of bundling method (esbuild vs webpack in create-react-app) :heavy_check_mark:

1. Remove need to `import React from 'react'` in every JSX file. 
    
    `npm install --save-dev vite-preset-react`
    ```js
    import {defaultConfig} from "vite";
    import react from "vite-react-preset";
    export default defineConfig({
      plugins : [react()],
    })
    ```
2. Allow import of SVG files
    `npm install --save-dev vite-plugin-svgr`
    ```js
    import {defaultConfig} from "vite";
    import react from "vite-react-preset";
    import svgr from "vite-plugin-svgr";
    export default defineConfig({
      plugins : [react(), svgr()],
    })
    ```





### For Windows Users who prefer to use WSL2.
- Purpose : To enable Hot Reload (while your application is running, you can make changes to the code and apply them to the running application [Link](https://blog.jetbrains.com/dotnet/2021/12/02/how-rider-hot-reload-works-under-the-hood/#:~:text=let's%20dive%20in!-,What%20does%20Hot%20Reload%20do%3F,your%20application%20is%20kept%20intact.))
  - Reason : WSL2 changed the file sharing protocol, from using their own custom developed protocol using the 9P protocol, which does not support file changes event for Create React App. [Link](https://github.com/facebook/create-react-app/issues/10253)
  - Solution : Move React App folder into **/home/%USER%** or simply **~/** instead of **/mnt/c/Users/%USER%/...**
  - There is **NO** need to run the app with configurations FAST_REFRESH=true and CHOKIDAR_USEPOLLING=true.
  - Other suggestions include downgrading the react-scripts from 5.0.0 to 4.0.3 (Did not test)