import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import App from './components/App';
import Firebase, { FirebaseContext } from './components/Firebase';

import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

render(
  <div>
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.1/css/bootstrap.min.css"
      integrity="sha384-VCmXjywReHh4PwowAiWNagnWcLhlEJLA5buUprzK8rxFgeH0kww/aWY76TfkUoSX"
      crossOrigin="anonymous"
    />
    <FirebaseContext.Provider value={new Firebase()}>
      <Provider store={store}>
        <App />
      </Provider>
    </FirebaseContext.Provider>
  </div>
  ,
  document.getElementById('root')
);

serviceWorker.unregister();
