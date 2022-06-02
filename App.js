import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import Tabs from './src/components/Tabs';
import store from './src/app/store';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <Tabs />
    </Provider>
  );
};
export default App;
