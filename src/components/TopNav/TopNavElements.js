import styled from 'styled-components';

export const Nav = styled.nav`
    background: #ffc50d;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
    right: 0;
    left: 0;
    top: 0;
    position: fixed;

    @media screen and (max-width: 722px) {
        padding-bottom: 50px;
    }

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 0 24px;
    max-width: 1200px;
    
    
    @media screen and (max-width: 725px){
        align-items: center;
        justify-content: center;
    }

    @media screen and (max-width: 393px){
        flex-direction: column;
    }
`;

export const InfoDiv = styled.div`
    display: flex;
    padding: 5px;
    margin-right: 20px;

    @media screen and (max-width: 722px){
        margin-right: 25px;
    }
`


export const TopDetail = styled.p`
    font-size: .8rem;
    color: #060606;
    padding-left: 5px;
`