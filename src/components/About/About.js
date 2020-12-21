import React from 'react';
import about1 from '../../images/about1.jpg';
import about2 from '../../images/about2.jpg';
import { 
    AboutContainer, 
    ContentWrapper, 
    SideA, 
    SideB,
    ContentWrapper2, 
    SideA2, 
    SideB2,
    Abouth1, 
    AboutP, 
    AboutImg,
    Abouthr,
} from './AboutElements';

const About = () => {
    return (
        <AboutContainer id="about">
            <ContentWrapper>
                <SideA>
                    <Abouth1>Who We Are</Abouth1>
                    <Abouthr />
                    <AboutP>with nearly 50 years’ experience, adco is one of the oldest and most established construction companies in australia. we are australian owned and are hugely proud of our heritage.</AboutP>
                </SideA>
                <SideB>
                    <AboutImg src={about1} alt="About Image" />
                </SideB>
            </ContentWrapper>

            <ContentWrapper2>
                <SideB2>
                    <AboutImg src={about2} alt="About Image" />
                </SideB2>
                <SideA2>
                    <Abouth1>Value Through Technology</Abouth1>
                    <Abouthr />
                    <AboutP>A progressive approach that amplifies results. Our tech-driven process = your economic agility.</AboutP>
                </SideA2>
            </ContentWrapper2>
        </AboutContainer>
    )
}

export default About;
