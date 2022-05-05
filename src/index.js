import { StrictMode } from 'react';

// ✅ now importing from react-dom/client
import { createRoot } from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { myReducers } from './redux/reducers/reducers';
// 👇️ IMPORTANT: make sure to specify correct ID
// must be the ID of the div element in your index.html file
const rootElement = document.getElementById('root');
const root = createRoot(rootElement);
const store = createStore(myReducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>,
  </BrowserRouter>
);
