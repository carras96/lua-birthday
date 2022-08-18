import React from 'react';
import styled from 'styled-components';
import { BoxText, InlineTextBold, InlineTextNormal, TextBold, TextNormal, WrapperContent } from './styles';

const Button = styled.span`
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 22px;
    cursor: pointer;
    color: #00D1AC;

    &:hover {
        color: #FABC46;
    }
`

const ArrowImg = styled.img`
    margin-left: 8px;
`

const GeneralContent = ({ onClickLeaderBoard }) => {
    return <WrapperContent>
        <BoxText>
            <TextBold>Eligible trading pairs</TextBold>
        </BoxText>
        <BoxText>
            <TextNormal>Ethereum network</TextNormal>
            <TextNormal>LUA - USDC</TextNormal>
            <TextNormal>LUA - ETH</TextNormal>
            <TextNormal>LUA - TOMOE</TextNormal>
            <TextNormal>LUA - SRM</TextNormal>
            <TextNormal>LUA - FTT</TextNormal>
        </BoxText>
        <BoxText>
            <TextNormal>TomoChain network</TextNormal>
            <TextNormal>LUA - TOMO</TextNormal>
            <TextNormal>LUA - USDT</TextNormal>
            <TextNormal>LUA - ETH</TextNormal>
        </BoxText>
        <BoxText>
            <InlineTextNormal><InlineTextBold>Competition period:</InlineTextBold> 9AM UTC 19, Sep - 9AM UTC 25 Sep, 2022</InlineTextNormal>
        </BoxText>
        <Button onClick={onClickLeaderBoard}>Leaderboard <ArrowImg src='/assets/images/arrow-up-green.png' /></Button>
    </WrapperContent>
}

export default GeneralContent;