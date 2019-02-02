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

const Body = ({ warningVisible, gridValue }) => (
    <StyledBody p={3}>
        {warningVisible ? <Warning warningVisible = { warningVisible }/> : ''}
        <Grid gridValue = { gridValue }/>
    </StyledBody>
); 

const mapStateToProps = state =>({
    warningVisible: state.home.warningVisible,
    gridValue: state.home.gridValue
})
export default connect(mapStateToProps)(Body);