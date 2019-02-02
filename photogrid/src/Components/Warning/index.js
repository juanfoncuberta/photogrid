import React from 'react';
import Wrapper from '../Wrapper';
import Box from '../Box';
import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import { Heading,Text } from 'rebass';

const StyledWarning = styled.div``;

const StyledText = styled(Text)`
    padding: 5px;
`;

const StyledHeading = styled(Close)`
    padding-bottom: 10px;
`;


 const Warning = ({ onWarningClick, warningContent }) => (
    <StyledWarning>
        <Wrapper>
            <Box>
                <StyledHeading size="18" onClick={onWarningClick}/>
                <Heading as='h3'> { warningContent.title} </Heading>
                <StyledText>{warningContent.text}</StyledText>
            </Box>
        </Wrapper>   
    </StyledWarning>
 );
 
 export default Warning;
