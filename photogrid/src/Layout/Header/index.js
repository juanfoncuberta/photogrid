import React from 'react';
import { Flex, Box, Text } from 'rebass';
import { rgba } from 'polished';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const StyledHeader = styled(Box)`
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 ${rgba('#fff', 0.2)};
    
`;

const StyledLink = styled(NavLink)`
color: ${({ theme }) => theme.colors.white};
font-size: 20px;
margin-right: 20px;
  text-decoration: none;
  text-transform: uppercase;
 
  :hover{
    border-bottom: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

const StyledTitle = styled.h1`
  font-size: 20px;
`;

const Header = () => (
    <StyledHeader p={3}>
        <Flex justifyContent= {'space-between'} alignItems="center " >
        <StyledTitle>
            Juan Foncuberta
        </StyledTitle>
        <Box>
            <StyledLink to="/">
                Subscribe
            </StyledLink>
            <StyledLink to="/sumbit">
                Submit
            </StyledLink>
            <StyledLink to="/about">
                About
            </StyledLink>
        </Box>
        

        </Flex>
    </StyledHeader>
)


export default Header;
