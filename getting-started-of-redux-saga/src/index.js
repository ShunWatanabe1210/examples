import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import todos from './reducer';
import App from './component/App';

const store = createStore(todos);

ReactDOM.render(<Provider store={store}><App/></Provider>, document.getElementById('app'));
