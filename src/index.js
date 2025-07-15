import React from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './src/app/app.js';
// Import 'store' here.
import { store } from './src/app/store.js';

const root = createRoot(document.getElementById('root'));
const render = () => {
  // Pass `state` and `dispatch` props to <App />
  root.render(
    <App 
      state={store.getState()}
      dispatch={store.dispatch}
    />,
  )
}
render();
// Subscribe render to changes to the `store`
store.subscribe(render);