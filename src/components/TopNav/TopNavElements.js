import styled from 'styled-components';

export const Nav = styled.nav`
    background: #ffc50d;
    display: flex;
    top: 0;
    justify-content: center;
    align-items: center;
    position: sticky;
    z-index: 11;

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

    @media screen and (max-width: 545px){
        align-items: center;
        justify-content: center;
    }
`;

export const InfoDiv = styled.div`
    display: flex;
    padding: 5px;
    margin-right: 20px;
`


export const TopDetail = styled.p`
    font-size: .8rem;
    color: #060606;
    padding-left: 5px;
`