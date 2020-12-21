import React from 'react';
import {
    CountContainer,
    CountWrapper,
    CountH2,
    CountP
} from './PorjectCountElements';

const ProjectCount = () => {
    return (
        <CountContainer>
            <CountWrapper>
                <CountP>127</CountP>
                <CountH2>Number of Clients</CountH2>
            </CountWrapper>
            <CountWrapper>
                <CountP>57</CountP>
                <CountH2>On Going Projects</CountH2>
            </CountWrapper>
            <CountWrapper>
                <CountP>39</CountP>
                <CountH2>Projects Completed</CountH2>
            </CountWrapper>
            <CountWrapper>
                <CountP>20</CountP>
                <CountH2>Years Established</CountH2>
            </CountWrapper>
        </CountContainer>
    )
}

export default ProjectCount;
