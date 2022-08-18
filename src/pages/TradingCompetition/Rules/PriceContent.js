import React from 'react';
import { BoxText, TextBold, TextNormal, WrapperContent } from './styles';

const PriceContent = () => {
    return <WrapperContent>
        <BoxText>
            <TextBold>Promotion A: 5 Top traders — 70,000 LUA to win</TextBold>
        </BoxText>
        <BoxText>
            <TextNormal>1st Place: 25,000 LUA</TextNormal>
            <TextNormal>2nd Place: 15,000 LUA</TextNormal>
            <TextNormal>3rd Place: 12,000 LUA</TextNormal>
            <TextNormal>4th Place: 10,000 LUA</TextNormal>
            <TextNormal>5th Place: 8,000 LUA</TextNormal>
            <TextNormal>{'>'} To be eligible, participants MUST trade at least 2,000 USD across the approved trading pairs during the competition period.</TextNormal>
        </BoxText>
        <BoxText>
            <TextBold>Promotion B: Trade 200$ to share 50,000 LUA</TextBold>
        </BoxText>
        <BoxText>
            <TextNormal>All users that trade at least 200 USD across the approved trading pairs during the competition period will evenly split a pool of 50,000 LUA.</TextNormal>
        </BoxText>
    </WrapperContent>
}

export default PriceContent;