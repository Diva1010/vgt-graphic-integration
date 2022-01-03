import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import playerReducer from './mediaplayer/reducers/playerReducer';
import './index.css';
import reportWebVitals from './reportWebVitals';
import MediaPlayer from "./mediaplayer/component/MediaPlayer";

const player = createStore(playerReducer);

ReactDOM.render(
      <Provider store={player}>
        <MediaPlayer />
      </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
