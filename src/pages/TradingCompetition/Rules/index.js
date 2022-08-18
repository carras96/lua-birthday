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
    margin: 0 15% 50px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const MainRules = styled.div`
    margin: 0 180px;
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
    font-size: 18px;
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

const Rules = () => {
    return <WrapperRules>
        <Header>
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
                <Button>See Details</Button>
            </WrappButton>
        </MainRules>

    </WrapperRules>
}

export default Rules