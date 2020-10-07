import React from 'react';
import ReactDOM from 'react-dom';
import DrumMachine from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <DrumMachine />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
