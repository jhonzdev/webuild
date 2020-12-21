import styled from 'styled-components';

export const AboutContainer = styled.div`
    height: 100%;
    background: #fff;
    align-items: center;
    padding-bottom: 100px

`

export const ContentWrapper = styled.div`
    padding-top: 200px;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    max-width: 1150px;
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr);
    grid-template-areas: 'colA colB';
    position: relative;
    
    @media screen and (max-width: 1100px){
        padding-top: 50px;
        text-align: center;
        justify-content: center;
        
        grid-template-areas: 'colA colA' 'colB colB';
        transition: 0.8s all ease;
    }
`

export const SideA = styled.div`
    padding: 20px;
    max-width: 500px;
    height: 90%;
    grid-area: colA;
    background: #ffc50d;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 3;
    left: 200px;
    box-shadow: 10px 10px 20px black;

    @media screen and (max-width: 1100px){
        left: 50%;
        transform: translateX(-50%);
        transition: 0.8s all ease;
        height: 100%;
        top: 100px
    };
`

export const SideB = styled.div`
    position: relative;
    grid-area: colB;
    z-index: 2;

    @media screen and (max-width: 1100px){
        right:0;
        transition: 0.8s all ease;
    }
`

export const ContentWrapper2 = styled.div`
    padding-top: 100px;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    max-width: 1150px;
    display: grid;
    grid-auto-columns: minmax(1fr, 1fr);
    grid-template-areas: 'colB colA';
    position: relative;


    @media screen and (max-width: 1100px){
        padding-top: 0px;
        text-align: center;
        justify-content: center;
        
        grid-template-areas: 'colA colA' 'colB colB';
        transition: 0.8s all ease;
    }
`

export const SideA2 = styled.div`
    padding: 20px;
    max-width: 500px;
    height: 90%;
    grid-area: colA;
    background: #ffc50d;
    align-items: center;
    justify-content: center;
    position: relative;
    right: 200px;
    z-index: 3;
    box-shadow: 4px 4px 10px #2a2a2a;

    @media screen and (max-width: 1100px){
        left: 50%;
        right: 0;
        transform: translateX(-50%);
        transition: 0.8s all ease;
        height: 100%;
        top: 100px
    };
`

export const SideB2 = styled.div`
    position: relative;
    left: 200px;
    grid-area: colB;
    z-index: 2;

    @media screen and (max-width: 1100px){
        left:0;
        transition: 0.8s all ease;
    }
`

export const Abouth1 = styled.h1`
    color: #060606;
    font-size: 48px;

    @media screen and (max-width: 768px){
        font-size: 42px;
    }

    @media screen and (max-width: 480px){
        font-size: 34px;
    }
`


export const AboutP = styled.p`
    color: #060606;
    font-size: 20px;
    margin-top: 34px;

    @media screen and (max-width: 768px) {
        font-size: 20px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const AboutImg = styled.img`
    max-width: 70%;

    
`

export const Abouthr = styled.hr`
    height: 4px;
    width: 25%;
    background-color: #fff;
    border: none;
`




