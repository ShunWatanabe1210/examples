import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import reducers from './reducers';
import {Provider} from 'react-redux';
import App from "./components/App";

const store = createStore(reducers);

render(
    <Provider store={store}>
      <App/>
    </Provider>,
    document.body
);