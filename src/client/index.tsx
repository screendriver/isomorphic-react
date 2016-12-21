import * as React from 'react';

import { Route, Router, browserHistory } from 'react-router';
import { Store, createStore } from 'redux';

import Layout from '../components/Layout';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

const Root = ({ store }: { store: Store<void> }) => (
  <Provider store={store}>
    <Router history={browserHistory}>
      <Route path="/" component={Layout} />
    </Router>
  </Provider>
);

const store = createStore(() => {});

render(
  <Root store={store} />,
  document.getElementById('main')
);
