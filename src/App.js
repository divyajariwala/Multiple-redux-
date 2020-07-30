import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';
import store from './redux/store'
import {Provider} from 'react-redux'
import HookCakeContainer from './components/HookCakeContainer';
import IcecreamContainer from './components/IcecreamContainer';
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <HookCakeContainer/>
      <CakeContainer/>
      <IcecreamContainer/>
    </div>
    </Provider>
  );
}

export default App;
