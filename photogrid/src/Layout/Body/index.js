import React from 'react';
import styled from 'styled-components';
import { Warning, Grid } from '../../Components'
import { Box } from 'rebass';
import { connect } from 'react-redux';

const StyledBody = styled(Box)`
    background: linear-gradient(#333,#000);
    flex: 1;
    display: flex;   
    flex-direction: column;
    justify-content: center;
    align-items: center;   
`;

const Body = ({ warningVisible, gridValue, onWarningClick, warningContent }) => (
    <StyledBody p={3}>
        {warningVisible ? <Warning onWarningClick = { onWarningClick } warningContent = { warningContent } /> : ''}
        <Grid gridValue = { gridValue }/>
    </StyledBody>
); 

const mapStateToProps = state =>({
    warningVisible: state.home.warningVisible,
    gridValue: state.home.gridValue,
    warningContent: state.home.warningContent

})
export default connect(mapStateToProps)(Body);