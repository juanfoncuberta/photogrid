import React from 'react';
import { Flex, Box } from 'rebass';
import { rgba } from 'polished';
import styled from 'styled-components';

const StyledHeader = styled(Box)`
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 ${rgba('#fff', 0.2)};
    
`;

const StyledH1 = styled.h1`
  font-size: 20px;
`;

const Header = () => (
    <StyledHeader p={3}>
        <Flex justifyContent= {'space-between'} alignItems="center " >
        <StyledH1>
            Juan Foncuberta
        </StyledH1>
        <div>
           Subscribe | Submit | About 
        </div>
        

        </Flex>
    </StyledHeader>
)


export default Header;
