import React from 'react';
import { FooterGrid } from '../../Components';
import { rgba } from 'polished';
import styled from 'styled-components';

const StyledFooter = styled.footer`
    background: ${({ theme }) => theme.colors.black};
    color: ${({ theme }) => theme.colors.white};
    display: flex;
    justify-content: space-between;
    padding: 10px 20px;
    align-items: center;
    border-bottom: 1px solid #000;
    box-shadow: 0 1px 0 ${rgba('#fff', 0.2)};
    position: relative;
`;


const StyledH1 = styled.h1`
  font-size: 20px;
`;

const Footer = () => (
    <StyledFooter>
        <FooterGrid/>
    </StyledFooter>
)


export default Footer;