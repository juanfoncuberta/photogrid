import React, { Component } from 'react';
import theme from './Styles/theme'
import Template from './Layout/'
import { ThemeProvider } from 'styled-components';

import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
         <Template />
      </ThemeProvider> 
    );
  }
}

export default App;
