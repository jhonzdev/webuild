import styled from 'styled-components';
import { IoCloseSharp } from "react-icons/io5";
import { Link as LinkS } from 'react-scroll';


export const SidebarContainer = styled.aside`
    display: grid;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999;
    align-items: center;
    background: #060606;
    trnsition: 0.3s ease-in-out;
    top: ${({ isOpen }) => (isOpen ? '0' : '100')};
`;

export const CloseIcon = styled(IoCloseSharp)`
    color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: #060606;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`;

export const SidebarWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fffff;
`;

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    list-style: none;
    font-size: 1.5rem;
    transition: 0.2s ease-in-out;
    color: #fff;
    cursor: pointer;

    &:hover {
        background: #ffc50d;
        color: #060606;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;
    width: 100%;

    @media screen and (max-width: 480px) {
        grid-template-rows(5, 50px);
    }
`