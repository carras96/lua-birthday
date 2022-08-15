import React from 'react';
import styled from 'styled-components';

const WrapperCard = styled.div`
    
    width: 100%;
    grid-column-start: ${props => props.colStart};
    grid-column-end: ${props => props.colEnd};
    grid-row-start: ${props => props.rowStart};
    grid-row-end: ${props => props.rowEnd};
`

const Card = styled.div`
    background: #1A191E;
    border-radius: 20px;
    width: ${props => props.isFullWidth ? '100%' : 'calc(100% - 25px)'};
    z-index: 2;
    position: relative;

    &:before {
        content: '';
        display: ${props => props.isYellowEvent ? 'block' : 'none' };
        width: 24px;
        height: 24px;
        background-image: url('/assets/images/rocket-icon.png');
        background-size: cover;
        background-repeat: no-repeat;
        left: -12px;
        top: -12px;
        position: absolute;
    }
`

const Main = styled.div`
    padding: 16px 24px 16px 16px;
`

const CardTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 24px;
    padding-left: 12px;
    position: relative;

    &:before {
        content: '';
        width: 3px;
        height: 100%;
        background: ${props => props.isYellowEvent ? '#FABC46' : '#00D1AC' };
        border-radius: 10px;
        left: 0;
        position: absolute;
    }
`

const CardDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
`

const RocketIcon = styled.img`

`

const EventCard = ({event}) => {
    const { title, content, width, colStart, colEnd, rowStart, rowEnd, isYellowEvent, isFullWidth } = event
    console.log(title, content, width);
    return <WrapperCard width={width} colStart={colStart} colEnd={colEnd} rowStart={rowStart} rowEnd={rowEnd}>
        <Card isYellowEvent={isYellowEvent} isFullWidth={isFullWidth}>
            <Main>
                <CardTitle isYellowEvent={isYellowEvent}>{title}</CardTitle>
                <CardDesc>{content}</CardDesc>
            </Main>

        </Card>
    </WrapperCard>
}

export default EventCard;