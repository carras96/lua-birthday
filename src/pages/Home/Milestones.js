import React from 'react';
import styled from 'styled-components';
import Bubble from '../../components/Bubble';
import TimeNode from '../../components/TimeNode';
import Scroll from './Scroll';

const WrapperMilestones = styled.div`
    margin-top: 200px;
    position: relative;
    // background-image: url('${process.env.PUBLIC_URL}/assets/images/bg-minestones.png');
    // width: 100%;
    // aspect-ratio: 1.6;
    // background-size: cover;
    // background-repeat: no-repeat;
    // background-position: center;
`

const LineImage = styled.img`
    margin-bottom: 25px;
    height: 50px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
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

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: center;
    }
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
    font-size: 0.9rem;
    line-height: 25px;
    color: rgba(255, 255, 255, 0.6);
    text-align: end;
`

const InfoTextValue = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: #FABC46;
`

const FirstBubbleSection = styled.div`
    height: 200px;
    position: relative;
`

const WrapperTimeLine = styled.div`
    width: 100%;
    height: 300px;
    overflow-x: scroll;
    overflow-y: hidden;
`

const TimeLine = styled.div`
    width: auto;
    height: 100%;
    position: relative;
`

const TimeLineImage = styled.img`
    position: absolute;
    width: 100%;
    height: 40px;
    top: 28px;
`

const BoxTimeNode = styled.div`
    width: 200px;
    height: 100%;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    display: inline-flex;
`

const NodeTime = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 22px;
    text-align: center;
    color: rgba(255, 255, 255, 0.37);
`

const NodeText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 21px;
    text-align: center;
    color: rgba(255, 255, 255, 0.37);
`

const TIME_LINE = [
    {
        time: '25 Sep 2020',
        note: 'The multichain protocol - LuaSwap officially launched'
    },
    {
        time: '30 Sep 2020',
        note: 'LUA got listed on FTX'
    },
    {
        time: '8 Oct 2020',
        note: 'LUA got listed on Coinone'
    },
    {
        time: '29 Oct 2020',
        note: 'LuaSwap V.1 LIVE'
    },
    {
        time: '27 Jan 2021',
        note: 'LuaSwap available on the TomoChain network'
    },
    {
        time: '3 Mar 2021',
        note: 'LuaSafe launched on the TomoChain network'
    },

    {
        time: '20 Apr 2021',
        note: 'LUA farming activated on the TomoChain network'
    },
    {
        time: '9 Aug 2021',
        note: 'Introducing LuaStarter — the Multi-chain IDO Platform on LuaSwap'
    },
    {
        time: '25 Sep 2021',
        note: 'LuaSwap turned 1!'
    },
    {
        time: '15 Oct 2021',
        note: 'TomoMasterDAO - the 1st IDO on LuaStarter'
    },
    {
        time: '6 Nov 2021',
        note: 'Dual farming of LuaStarter live with LUA-tDAO and LUA - PIXEL pools'
    },
    {
        time: '25 Nov 2021',
        note: '30K Twitter follower milestone!'
    },

    {
        time: '11 Jan 2022',
        note: 'Starbots IDO recorded the fastest sold-out time of 5 seconds'
    },
    {
        time: 'Mar 2022',
        note: 'IDO wave at LuaStarter with 4 IDOs completion'
    },
    {
        time: '4 Jul 2022',
        note: 'Over 60 M + LUA staked in LuaSafe'
    },
]

const Milestones = () => {
    return <WrapperMilestones>
        <LineImage src={`${process.env.PUBLIC_URL}/assets/images/line-3.png`} />
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
            <Bubble width={'16px'} isSort top='40%' left='15%' time={[18, 2]} scale={0.7}/>
            <Bubble width={'24px'} top='20%' right='10%' time={[12, 3]} scale={0.3}/>
            <Bubble width={'16px'} top='25%' right='15%' time={[19, 4]} scale={0.6}/>
        </FirstBubbleSection>

        <WrapperTimeLine>
            <TimeLine>
                <TimeLineImage src={`${process.env.PUBLIC_URL}/assets/images/line-time.png`} />
                <Scroll items={TIME_LINE} />
            </TimeLine>
        </WrapperTimeLine>

        <FirstBubbleSection>
            <Bubble width={'24px'} top='50%' left='20%' time={[15, 2]} scale={0.6}/>
            <Bubble width={'16px'} top='75%' left='5%' time={[10, 4]} scale={0.4}/>
        </FirstBubbleSection>

    </WrapperMilestones>
}

export default Milestones;