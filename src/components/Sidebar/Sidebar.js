import React from 'react';
import { 
    SidebarContainer, 
    Icon, 
    CloseIcon, 
    SidebarWrapper, 
    SidebarMenu, 
    SidebarLink 
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer isOpen={isOpen}>
            <Icon onClick={toggle}>
                <CloseIcon />
            </Icon>
            <SidebarWrapper>
                <SidebarMenu>
                    <SidebarLink 
                            to="about"
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} 
                            onClick={toggle}>Who we are</SidebarLink>
                    <SidebarLink 
                            to="project" 
                            smooth={true}
                            duration={500}
                            spy={true}
                            exact='true'
                            offset={-80} 
                            onClick={toggle}>Our Project</SidebarLink>
                    <SidebarLink 
                        to="build" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        onClick={toggle}>What we Build</SidebarLink>
                    <SidebarLink 
                        to="contact" 
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80} 
                        onClick={toggle}>Our Contact</SidebarLink>
                </SidebarMenu>
            </SidebarWrapper>
        </SidebarContainer>
    )
}


export default Sidebar;
