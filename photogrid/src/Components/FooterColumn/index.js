import React from 'react';
import {  Box, Heading, Text } from 'rebass';
import styled from 'styled-components';

const StyledBox = styled(Box)`
text-align: justify
`;

const StyledText = styled(Text)`
    margin: 0 40px;
`;
const FooterColum = ({ title, text}) => (

   <StyledBox  p={3} Flex width={1/4} px="50" mx="100">
       
        <Heading textAlign={'center'}>
            {title}
        </Heading>  
        <StyledText fontSize={0} textAlign={'justify'}>
        { text }
        </StyledText>
         
    </StyledBox>
);

export default FooterColum;



