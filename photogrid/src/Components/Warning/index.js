import React from 'react';
import Wrapper from '../Wrapper';
import Box from '../Box';
import styled from 'styled-components';


const StyledWarning = styled.div``;

 const Warning = ({ children }) => (
    <StyledWarning>
        <Wrapper>
            <Box>
                <h1>This is the warning</h1>
            </Box>
        </Wrapper>   
    </StyledWarning>
 );
 
 export default Warning;
