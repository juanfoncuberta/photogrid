import React, { Component } from 'react';
import theme from './Styles/theme'
import Template from './Layout/'
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
//import store from './Store';
import { PersistGate } from 'redux-persist/integration/react'

import storeObj from './Store';

const { store, persistor } = storeObj;

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
         <PersistGate persistor={persistor} loading={null}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Route path='/' component={Template}></Route>
          </BrowserRouter>
        </ThemeProvider>
        </PersistGate> 
      </StoreProvider>
    );
  }
}

export default App;
