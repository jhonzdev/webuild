import styled from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

export const NavDiv = styled.nav`
    background: #060606;
    display: flex;
    height: 80px;
    top: 1.6rem;
    font-size: 1rem;
    align-items: center;
    justify-content: center;
    position: sticky;
    z-index: 10;

    @media screen and (max-width: 722px){
        top: 3rem;
    }

    @media screen and (max-width: 393px){
        top: 5rem;
    }
`;

export const NavContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
`;

export const NavLogo = styled(LinkR)`
    color: #ffc50d;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 13px;
    font-weight: bold;
    text-decoration: none;
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        color: #ffffff;
        cursor: pointer;
    }
`

export const NavMenu = styled.ul`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    text-align: center;
    list-style: none;
    margin-right: -22px;

    @media screen and (max-width: 768px){
        display: none;
    }
`

export const NavItem = styled.li`
    height: 80px;

    
`

export const NavLink = styled(LinkS)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    color: #ffffff;

    &:hover {
        background: #ffc50d;
        color: #060606;
    }

    &.active{
        background: #ffc50d;
        color: #060606;
        font-weight: bold;
    }
`
