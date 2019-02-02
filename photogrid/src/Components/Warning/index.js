import React from 'react';
import Wrapper from '../Wrapper';
import Box from '../Box';
import styled from 'styled-components';
import { Close } from 'styled-icons/material/Close';
import { Heading,Text } from 'rebass';
import { connect } from 'react-redux';

const StyledWarning = styled.div`
`;

const StyledText = styled(Text)`
    padding: 5px;
   
    
`;

const StyledClose = styled(Close)`
    padding-bottom: 10px;
    position: relative;
`;


 const Warning = ({ warningVisible,onWarningClick, warningContent }) => (
    <StyledWarning>
        {warningVisible ? 
            <Wrapper>
            <Box>
                <StyledClose size="18" onClick={onWarningClick}/>
                <Heading as='h3'> { warningContent.title} </Heading>
                <StyledText fontSize={12}>{warningContent.text}</StyledText>
            </Box>
        </Wrapper>  :''
    
    
        }
         
    </StyledWarning>
 );
 
 const mapStateToProps = state =>({
    warningVisible: state.home.warningVisible,
    warningContent: state.home.warningContent

})
export default connect(mapStateToProps)(Warning);
