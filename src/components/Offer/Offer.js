import React from 'react';
import ImageCom from '../../images/com.png';
import ImageInd from '../../images/ind.png';
import ImageInt from '../../images/int.png'; 
import {
    OfferContainer,
    OfferTitle,
    OfferTitleH1,
    OfferTitleP,
    OfferContent,
    OfferContentCard,
    OfferContentIcon,
    OfferContentH1,
    OfferContentP
} from './OfferElements';

const Offer = () => {
    return (
        <OfferContainer id="build"> 
            <OfferTitle>
                <OfferTitleH1>What We Build</OfferTitleH1>
                <OfferTitleP>We Build a 3 Types Commercial, Industrial, International</OfferTitleP>
            </OfferTitle>
            <OfferContent>
                <OfferContentCard>
                    <OfferContentIcon src={ImageCom} alt="Image" ></OfferContentIcon>
                    <OfferContentH1>Commercial</OfferContentH1>
                    <OfferContentP>More than 75% of our business is referral clients—a testament to our business values, construction standards and safety practices.</OfferContentP>
                </OfferContentCard>

                <OfferContentCard>
                    <OfferContentIcon src={ImageInd} alt="Image" ></OfferContentIcon>
                    <OfferContentH1>Industrial</OfferContentH1>
                    <OfferContentP>For over 50 years, we have had a group of design and construction professionals fully dedicated to the industrial industry.</OfferContentP>
                </OfferContentCard>

                <OfferContentCard>
                    <OfferContentIcon src={ImageInt} alt="Image" ></OfferContentIcon>
                    <OfferContentH1>International</OfferContentH1>
                    <OfferContentP>Being 1 of 4 brands in a construction group operating worldwide, we have no limits to the projects we're capable of delivering for clients.</OfferContentP>
                </OfferContentCard>
            </OfferContent>
        </OfferContainer>
    )
}

export default Offer;
