import React from 'react';
import {
    FooterContainer,
    FooterWrap,
    WebRights
} from './FooterElements';

const Footer = () => {
    return (
        <FooterContainer>
            <FooterWrap>
                <WebRights>WeBuild © {new Date().getFullYear()} All rights reserved.</WebRights>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;
