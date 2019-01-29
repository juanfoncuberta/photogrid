import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';
import Footer from '../Footer';


// eslint-disable-next-line
/* injectGlobal`
    ${normalize()}
`; */

const StyledWrapped = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`;

const Template = ({children}) => (
    <StyledWrapped>
        <Header />
        <Body>
            {children}
        </Body>
        <Footer />
    </StyledWrapped>
);

export default Template;