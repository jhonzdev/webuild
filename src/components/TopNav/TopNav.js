import React from 'react';
import { IoMailSharp, IoLocationSharp, IoCallSharp  } from "react-icons/io5";
import { Nav, NavbarContainer, InfoDiv, TopDetail } from './TopNavElements';

const TopNav = () => {

    return (
        <Nav>
            <NavbarContainer>
                <InfoDiv>
                    <IoLocationSharp />
                    <TopDetail>Bonifacio Global City, Taguig, Kalakhang Maynila</TopDetail>
                </InfoDiv>
                <InfoDiv>
                    <IoMailSharp />
                    <TopDetail>webuild@gmail.com</TopDetail>
                </InfoDiv>
                <InfoDiv>
                    <IoCallSharp />
                    <TopDetail>(+63) 989 796 9594</TopDetail>
                </InfoDiv>
            </NavbarContainer>
        </Nav>
    )
}

export default TopNav;
