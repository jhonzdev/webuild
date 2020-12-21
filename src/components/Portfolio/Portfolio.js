import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import image1 from '../../images/2x2-1.jpg';
import image2 from '../../images/2x2-2.jpg';
import image3 from '../../images/2x2-3.jpg';
import image4 from '../../images/2x2-4.jpg';
import image5 from '../../images/2x2-5.jpg';
import image6 from '../../images/2x2-6.jpg';
import image7 from '../../images/4x2-1.jpg';
import image8 from '../../images/4x2-2.jpg';
import image9 from '../../images/4x2-3.jpg';

import {
    PortContainer,
    PortTitle,
    PortH1,
    PortP,
    PortWrapper,
    PortImage1,
    PortImage2,
    PortImage3,
    PortImage4,
    PortImage5,
    PortImage6,
    PortImage7,
    PortImage8,
    PortImage9,
    PortContainerWrapper
} from './PortfolioElements';

const Portfolio = () => {

    useEffect(() => {
        Aos.init({ duration: 2000});
    }, []);

    return (
        <PortContainer id="project">
            <PortContainerWrapper>
                <PortTitle>
                    <PortH1>Our Project</PortH1>
                    <PortP>This is our finish Project</PortP>
                </PortTitle>
                <PortWrapper>
                    <PortImage1 src={image7} alt="Building Image" data-aos="fade-up"/>
                    <PortImage2 src={image1} alt="Building Image" data-aos="fade-up"/>
                    <PortImage3 src={image2} alt="Building Image" data-aos="fade-up"/>
                    <PortImage4 src={image3} alt="Building Image" data-aos="fade-up"/>
                    <PortImage5 src={image8} alt="Building Image" data-aos="fade-up"/>
                    <PortImage6 src={image4} alt="Building Image" data-aos="fade-up"/>
                    <PortImage7 src={image5} alt="Building Image" data-aos="fade-up"/>
                    <PortImage8 src={image6} alt="Building Image" data-aos="fade-up"/>
                    <PortImage9 src={image9} alt="Building Image" data-aos="fade-up"/>
                </PortWrapper>
            </PortContainerWrapper>
        </PortContainer>
    )
}

export default Portfolio;
