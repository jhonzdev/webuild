import styled from 'styled-components';

export const CountContainer = styled.div`
    background: #060606;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    height: 150px;
    
    justify-content: center;
    align-content: center;
    align-items: center;

    @media screen and (max-width: 1050px){
        height: 100%;
    }
`

export const CountWrapper = styled.div`
    text-align: center;
    color: #ffc50d;
    flex-grow: 1;
    padding: 20px;
`

export const CountH2 = styled.div`
    font-size: 24px;

    @media screen and (max-width: 768px) {
        font-size: 18px;
    }

    @media screen and (max-width: 480px) {
        font-size: 16px;
    }
`

export const CountP = styled.div`
    font-size: 48px;
    font-weight: bold;
    color: #fff;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`