import styled from 'styled-components';


export const PortContainer = styled.div`
    height: 980px;
    background: #

    @media screen and (max-width: 1020px) {
        height: 1200px;
    }

    @media screen and (max-width: 1020px) {
        height: 1200px;
    }

    @media screen and (max-width: 800px) {
        height: 1700px;
    }
`

export const PortContainerWrapper = styled.div`
    height: 100%;
    width: 100%;
    z-index: 1;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 12px 24px;
    justify-content: center;

    @media screen and (max-width: 1020px) {
        margin-right: 0;
        margin-left: 0;
    }

    @media screen and (max-width: 800px) {
        margin-right: 0;
        margin-left: 0;
    }

`


export const PortTitle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 24px 48px;
    margin-bottom: 50px;
    margin-top: 50px;
`


export const PortH1 = styled.h1`
    font-size: 48px;
    line-height: 1.1;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`


export const PortP = styled.p`
    font-size: 1rem;
`


export const PortWrapper = styled.div`
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr, 1fr, 1fr);
    align-items: center;
    justify-content: center;
    grid-gap: 10px;
    margin-bottom: 50px;
    grid-template-areas: 
        'col1 col1 col2 col3'
        'col4 col5 col5 col6'
        'col7 col8 col9 col9';

    @media screen and (max-width: 1020px) {
        grid-template-areas: 
        'col1 col1 col2'
        'col3 col4 col6'
        'col5 col5 col7'
        'col8 col9 col9';
        transition: 0.8s all ease;
    }

    @media screen and (max-width: 800px) {
        grid-template-areas: 
        'col1 col1'
        'col2 col3'
        'col5 col5'
        'col4 col6'
        'col9 col9'
        'col7 col8';
        transition: 0.8s all ease;
    }
`


export const PortImage1 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col1;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage2 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col2;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage3 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col3;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage4 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col4;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage5 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col5;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage6 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col6;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage7 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col7;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage8 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col8;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`

export const PortImage9 = styled.img`
    width: 100%;
    height: 200px;
    grid-area: col9;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer
    }
`


