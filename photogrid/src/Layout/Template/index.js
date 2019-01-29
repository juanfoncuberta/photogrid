import React from 'react';
import styled, { injectGlobal } from 'styled-components';
import { normalize } from 'polished';

import Header from '../Header';
import Body from '../Body';


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
    </StyledWrapped>
);

export default Template;