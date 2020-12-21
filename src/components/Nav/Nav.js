import React from 'react';
import { IoMenuSharp } from "react-icons/io5";
import { animateScroll as scroll} from 'react-scroll';
import { NavDiv, NavContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLink } from './NavElements';

const Nav = ({ toggle }) => {

    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <NavDiv>
            <NavContainer>
                <NavLogo to="/" onClick={toggleHome}>WeBuild</NavLogo>
                <MobileIcon onClick={toggle}>
                    <IoMenuSharp />
                </MobileIcon>
                
                <NavMenu>
                    <NavItem>
                        <NavLink 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Who we are</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to="project"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>Our Project</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to="build"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80}>What we Build</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink 
                            to="contact"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-200}>Our Contact</NavLink>
                    </NavItem>
                </NavMenu>
            </NavContainer>
        </NavDiv>
    )
}

export default Nav;
