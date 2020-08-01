import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

render(
  <FirebaseContext.Provider value={new Firebase()}>
    <Provider store={store}>
      <App />
    </Provider>
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
