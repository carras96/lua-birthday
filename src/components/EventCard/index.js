import React from 'react';
import ReactTooltip from 'react-tooltip';
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
    cursor: pointer;

    transition: transform .5s;

    &::after {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        transition: opacity 2s cubic-bezier(.165, .84, .44, 1);
        box-shadow: 0 8px 17px 0 rgba(0, 0, 0, .2), 0 6px 20px 0 rgba(0, 0, 0, .15);
        content: '';
        opacity: 0;
        z-index: -1;
    }

    &:hover,
    &:focus {
        transform: scale3d(1.05, 1.05, 1);
        &::after {
            opacity: 1;
        }
    }

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
    font-size: 1rem;
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
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
`

const Tooltip = styled(ReactTooltip)`
    width: 300px;
    padding: 20px 16px;
    height: auto;
`

const TooltipTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 1rem;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
`

const TooltipContent = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
    margin: 8px 0px;
`

const TooltipTime = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.87);
`

const EventCard = ({event}) => {
    const { detail, title, content, width, colStart, colEnd, rowStart, rowEnd, isYellowEvent, isFullWidth } = event
    return <WrapperCard width={width} colStart={colStart} colEnd={colEnd} rowStart={rowStart} rowEnd={rowEnd}>
        <Card isYellowEvent={isYellowEvent} isFullWidth={isFullWidth} data-tip data-for={title}>
            <Main>
                <CardTitle isYellowEvent={isYellowEvent}>{title}</CardTitle>
                <CardDesc>{content}</CardDesc>
            </Main>
        </Card>
        <Tooltip place="bottom" id={title}>
           <TooltipTitle>{detail.title}</TooltipTitle>
           <TooltipContent>{detail.content}</TooltipContent>
           <TooltipTime>{detail.time}</TooltipTime>
        </Tooltip>
    </WrapperCard>
}

export default EventCard;