import React from 'react';
import styled from 'styled-components';
//import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';
import { BrowserRouter } from 'react-router-dom';


// eslint-disable-next-line
/* injectGlobal`
    ${normalize()}
`; */
const img = 'https://source.unsplash.com/random/1280x720';
const StyledWrapped = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Template = ({children}) => (
    <StyledWrapped>
        <Header />
        <Body />       
        <Footer />
    </StyledWrapped>
);

export default Template;