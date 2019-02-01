import React from 'react';

import styled from 'styled-components';
import { Warning, Grid, Slide } from '../../Components'

const StyledBody = styled.div`
    background: linear-gradient(#333,#000);
    flex: 1;
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;
    
`;

const Body = ({ body }) => (
    <StyledBody>
        <Warning/>
        <Grid/>
    </StyledBody>
); 


export default Body;