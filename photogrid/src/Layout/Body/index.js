import React from 'react';
import PropTypes from 'prop-types';

import Wrapper from './Wrapper';
import Box from './Box';

const Body = ({ children }) => (
<Wrapper>
    <Box>
        <h1>This is the body</h1>
    </Box>
</Wrapper>   
);

export default Body;