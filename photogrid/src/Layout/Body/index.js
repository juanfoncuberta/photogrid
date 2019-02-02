import React from 'react';
import styled from 'styled-components';
import { Warning, Grid } from '../../Components'
import { Box } from 'rebass';

const StyledBody = styled(Box)`
    background: linear-gradient(#333,#000);
    flex: 1;
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;   
`;

const Body = () => (
    <StyledBody p={3}>
        <Warning/>
        <Grid/>
    </StyledBody>
); 


export default Body;