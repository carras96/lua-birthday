import React from 'react';
import styled from 'styled-components';
import Bubble from '../../components/Bubble';

const WrapperMilestones = styled.div`
    margin-top: 200px;
    position: relative;
`

const LineImage = styled.img`
    margin-bottom: 25px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    
`

const TitleGreen = styled.span`
    color: #37CD95;
`

const TitleYellow = styled.span`
    color: #FABC46;
`

const Header = styled.div`
    display: flex;
    margin: 0 70px;
    justify-content: space-between;
    align-items: center;
`
const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-right: 12px;
    position: relative;

    &:before {
        content: '';
        width: 3px;
        height: 100%;
        background: #00D1AC;
        border-radius: 10px;
        right: 0;
        position: absolute;
    }
`

const InfoTextWrap = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.6);
    text-align: end;
`

const InfoTextValue = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
`

const FirstBubbleSection = styled.div`
    height: 250px;
    position: relative;
`

const Milestones = () => {
    return <WrapperMilestones>
        <LineImage src='/assets/images/line-3.png' />
        <Header>
            <Title>
                <TitleYellow>LuaSwap</TitleYellow> <TitleGreen>Milestones</TitleGreen>
            </Title>
            <HeaderInfo>
                <InfoTextWrap>All-Time High Total Liquidity <InfoTextValue>$12M USD</InfoTextValue></InfoTextWrap>
                <InfoTextWrap>All Time High $LUA Daily Volume on All Exchanges <InfoTextValue>{'>'} $20M USD</InfoTextValue></InfoTextWrap>
            </HeaderInfo>
        </Header>
        <FirstBubbleSection>
            <Bubble width={'16px'} isSort top='40%' left='15%'/>
            <Bubble width={'24px'} top='20%' right='10%'/>
            <Bubble width={'16px'} top='25%' right='15%'/>
        </FirstBubbleSection>
    </WrapperMilestones>
}

export default Milestones;