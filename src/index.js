import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App';
import { GlobalStyle } from './components/GlobalStyled';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <PersistGate loading={null} persistor={persistor}>
      <Provider store={store}>
      <BrowserRouter basename="/sichbook">
        <App />
      </BrowserRouter>
      </Provider>
    </PersistGate>
    <GlobalStyle/>
    </>
  // </React.StrictMode>
);
