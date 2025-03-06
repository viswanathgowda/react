# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

## React Project Structure and Execution Flow

### Project Structure

A typical React project structure looks like this:

```
my-app/
├── node_modules/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   │   └── ...
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   └── serviceWorker.js
├── .gitignore
├── package.json
└── README.md
```

### Execution Flow

1. **Entry Point**: The execution starts from `public/index.html`. This file contains a `<div id="root"></div>` which is the mounting point for the React application.

2. **Index.js**: The `src/index.js` file is the entry point for the React application. It renders the `<App />` component into the `<div id="root"></div>`.

    ```javascript
    import React from 'react';
    import ReactDOM from 'react-dom';
    import './index.css';
    import App from './App';
    import * as serviceWorker from './serviceWorker';

    ReactDOM.render(<App />, document.getElementById('root'));

    serviceWorker.unregister();
    ```

3. **App Component**: The `src/App.js` file contains the main App component which is the root component of the application.

    ```javascript
    import React from 'react';
    import './App.css';

    function App() {
      return (
        <div className="App">
          <header className="App-header">
            <h1>Welcome to React</h1>
          </header>
        </div>
      );
    }

    export default App;
    ```

### Key React Concepts

#### JSX

JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It is used to describe the UI structure. For example:

```jsx
const element = <h1>Hello, world!</h1>;
```

#### Components

Components are the building blocks of a React application. They can be functional or class-based. Here is an example of a functional component:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

#### State

State is an object that determines how a component renders and behaves. It is managed within the component. For example:

```javascript
class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}
```

#### Props

Props (short for properties) are read-only attributes used to pass data from parent to child components. For example:

```javascript
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```
#### Lifecycle Methods

### Difference Between Props and State

**Props:**
- Props are read-only attributes used to pass data from parent to child components.
- Props are immutable, meaning they cannot be modified by the component that receives them.
- Props allow components to be reusable by passing different data to them.
- Props are set by the parent component and are fixed throughout the lifetime of a component.

**State:**
- State is a local data storage that is managed within the component.
- State is mutable, meaning it can be changed using the `setState` method in class components or the `useState` hook in functional components.
- State is used to store data that can change over time and affect the rendering of the component.
- State is initialized in the component itself and can be updated based on user interactions or other events.

In summary, props are used to pass data from parent to child components, while state is used to manage data that changes within a component.

Lifecycle methods are methods that get called at different stages of a component's lifecycle, such as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount`. For example:

```javascript
class Clock extends React.Component {
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>It is {this.state.date.toLocaleTimeString()}.</h1>
      </div>
    );
  }
}
```

#### Hooks

Hooks are functions that let you use state and other React features in functional components. Common hooks include `useState`, `useEffect`, and `useContext`. For example:

```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

#### Context

Context provides a way to pass data through the component tree without having to pass props down manually at every level. For example:

```javascript
const ThemeContext = React.createContext('light');

function App
