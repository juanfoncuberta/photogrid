import React from 'react';
//import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Warning } from '../../Components'

/* import Wrapper from './Wrapper';
import Box from '../../Components/Box';
 */


const StyledBody = styled.div`
    background: linear-gradient(#333,#000);
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
`;
/* const Body = ({ body }) => (
    <StyledBody body={body}/>
); */

const Body = ({ body }) => (
    <StyledBody>
        <Warning/>
    </StyledBody>
); 


export default Body;