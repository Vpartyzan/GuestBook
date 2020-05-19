import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import state, { subscribe, addComment, updateNewNameText, updatenewMessageText } from './State/State';

const rerenderTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} updateNewNameText={updateNewNameText} updatenewMessageText={updatenewMessageText} addComment={addComment} />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

rerenderTree(state);

subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
