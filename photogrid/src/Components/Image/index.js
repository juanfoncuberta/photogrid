import React from 'react';
import { Image } from 'rebass';
import styled from 'styled-components';

const StyledImage = ({imagePath}) => (
 
    <Image
        width={'200px'}
        height={'200px'}
        src={imagePath}
        borderRadius={8}
    /> 
);

export default StyledImage;
