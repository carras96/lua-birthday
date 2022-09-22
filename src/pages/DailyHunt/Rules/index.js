import React from 'react';
import styled from 'styled-components';
import Accordion from '../../../components/Accordion';
import GeneralContent from './GeneralContent';
import GetRewardContent from './GetRewardContent';
import HowToWinContent from './HowToWinContent';
import PriceContent from './PriceContent';

const WrapperRules = styled.div`
    position: relative;
    margin-bottom: 250px;
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
    margin: 0 15% 50px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const MainRules = styled.div`
    margin: 0 180px;

    @media (max-width: 991px) {
        margin: 0 50px;
    }
`

const WrappButton = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding-top: 40px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.37);
`

const Button = styled.div`
    width: 178px;
    height: 48px;
    border: 1px solid #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.87);
        background-color: rgba(255, 255, 255, 0.87);
    }
`

const GradiantText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 78px;
    text-transform: uppercase;

    background: linear-gradient(180deg, rgba(85, 85, 85, 0.4) 22.88%, rgba(20, 20, 20, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: -40px;

    @media (max-width: 767px) {
        font-size: 3rem;
        line-height: 54px;
        margin-bottom: -20px;
    }
`

const Rules = () => {
    const onSeeDetail = () => {
        window.open('https://medium.com/luaswap/join-treasure-hunt-to-celebrate-luaturns2-become-the-conqueror-to-achieve-decent-rewards-fa0720644f3a', '_blank', 'noopener,noreferrer');
    }
    return <WrapperRules>
        <Header>
            <GradiantText>Rules</GradiantText>
            <Title>
                <TitleYellow>Rule</TitleYellow><TitleGreen>s</TitleGreen>
            </Title>
        </Header>
        <MainRules>
            <Accordion title='General'>
                <GeneralContent />
            </Accordion>
            <Accordion title='How to win'>
                <HowToWinContent />
            </Accordion>
            <Accordion title='Prize'>
                <PriceContent />
            </Accordion>
            <Accordion title='How to get rewards'>
                <GetRewardContent />
            </Accordion>
            <WrappButton>
                <Button onClick={onSeeDetail}>See Details</Button>
            </WrappButton>
        </MainRules>

    </WrapperRules>
}

export default Rules