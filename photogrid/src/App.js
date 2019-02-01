import React, { Component } from 'react';
import theme from './Styles/theme'
import Template from './Layout/'
import { ThemeProvider } from 'styled-components';
import { Provider as StyleProvider } from 'rebass';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
           <Template />
         </BrowserRouter>
      </ThemeProvider> 
    );
  }
}

export default App;
