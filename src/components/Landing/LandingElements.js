import styled from 'styled-components';
import { Link } from 'react-scroll';
import { IoChevronForwardSharp, IoArrowForwardSharp } from "react-icons/io5";

export const LandingContainer = styled.div`
    background: #383838;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 850px;
    position: relative;
    bottom: -100px;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(
            180deg, 
            rgba(4, 4, 4, 1.2) 0%,
                rgba(4, 4, 4, 0.6) 30%
            ),
            linear-gradient(0deg, rgba(4, 4, 4, 1.2) 0%,
            transparent 100%
        );
        z-index: 2;
        
    }
`;

export const LandingBg = styled.div`
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #060606;
`

export const LandingContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 3;
    flex-direction: column;
    max-width: 1200px;
    padding: 8px 24px;
`

export const LandingH1 = styled.h1`
    font-size: 48px;
    color: #fff;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`

export const LandingP = styled.p`
    font-size: 24px;
    margin-top: 24px;
    color: #fff;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px) {
        font-size: 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`

export const LandingBTNWrapper = styled.div`
    display: flex;
    margin-top: 32px;
    align-items: center;
    flex-direction: column;
`
export const LandingButton = styled(Link)`
    background: none;
    outline: none;
    border: solid 2px #fff;
    color: #fff;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    padding: 20px;

    &:hover {
        border: none;
        background: #ffc50d;
        color: #060606;
    }
`

export const ChevronForward = styled(IoChevronForwardSharp)`
    margin-left: 5px;
    font-size: 20px;
`

export const ArrowForward = styled(IoArrowForwardSharp)`
    margin-left: 5px;
    font-size: 20px;  
`
