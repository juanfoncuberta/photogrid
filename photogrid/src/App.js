import React, { Component } from 'react';
import theme from './Styles/theme'
import Template from './Layout/'
import { ThemeProvider } from 'styled-components';
import { Provider as StoreProvider} from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import store from './Store';

import './App.css';

class App extends Component {
  render() {
    return (
      <StoreProvider store={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Route path='/' component={Template}></Route>
          </BrowserRouter>
        </ThemeProvider> 
      </StoreProvider>
    );
  }
}

export default App;
