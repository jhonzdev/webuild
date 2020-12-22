import styled from 'styled-components';

export const OfferContainer = styled.div`
    height: 910px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: #ffc50d;

    @media screen and (max-width: 1002px) {
        height: 1000px;
    }

    @media screen and (max-width: 768px) {
        height: 1400px;
    }

    @media screen and (max-width: 480px) {
        height: 1400px;
    }
    @media screen and (max-width: 445px) {
        height: 1500px;
    }
`

export const OfferTitle = styled.div`
    text-align: center;
    padding: 50px;
`

export const OfferTitleH1 = styled.h1`
    font-size: 48px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const OfferTitleP = styled.p`
    font-size: 1rem;
`

export const OfferContent = styled.div`
    max-width: 1150px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`

export const OfferContentCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 380px;
    padding: 30px;
    transition: all 0.2s ease-in-out;
    box-shadow: 4px 4px 10px #2a2a2a;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`

export const OfferContentIcon = styled.img`
    height: 100px;
    width: 100pxpx;
    margin-bottom: 20px;
    margin-top: 10px;
`

export const OfferContentH1 = styled.h1`
    font-size: 2.5rem;
    color: #060606;
    margin-bottom: 20px;

    @media screen and (max-width: 480px) {
        font-size: 2rem;
    }
`

export const OfferContentP = styled.p`
    font-size: 1rem;
    color: #060606;
    text-align: center
`
