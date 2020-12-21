import React, {useState} from 'react';
import bgvideo from '../../images/bgvideo.mp4';
import { 
    LandingContainer, 
    LandingBg, 
    VideoBg,
    LandingContent,
    LandingH1,
    LandingP,
    LandingBTNWrapper,
    LandingButton,
    ChevronForward,
    ArrowForward
} from './LandingElements';

const Landing = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    }

    return (
        <LandingContainer id="landing">
            <LandingBg>
                <VideoBg autoPlay loop muted src={bgvideo} type='video/mp4' />
            </LandingBg>
            <LandingContent>
                <LandingH1>WeBuild is a Construction Company</LandingH1>
                <LandingP>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. </LandingP>
                <LandingBTNWrapper>
                    <LandingButton
                        to="about"
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact='true'
                        offset={-80}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}>
                        Get Continue { hover ? <ArrowForward /> : <ChevronForward /> }
                    </LandingButton>
                </LandingBTNWrapper>
            </LandingContent>
        </LandingContainer>
    )
}

export default Landing;
