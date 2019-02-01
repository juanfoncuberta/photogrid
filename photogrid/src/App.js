import React, { Component } from 'react';
import theme from './Styles/theme'
import Template from './Layout/'
import { ThemeProvider } from 'styled-components';
import { BrowserRouter, Route } from 'react-router-dom';

import './App.css';

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
           <Route path='/' component={Template}></Route>
         </BrowserRouter>
      </ThemeProvider> 
    );
  }
}

export default App;
