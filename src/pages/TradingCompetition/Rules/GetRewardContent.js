import React from 'react';
import { BoxText, TextNormal, WrapperContent } from './styles';

const GetRewardContent = () => {
    return <WrapperContent>
        <BoxText>
            <TextNormal>Final results will be posted within 3 working days after the trading competition ends.</TextNormal>
        </BoxText>
        <BoxText>
            <TextNormal>Rewards will be distributed to all winner wallet addresses within 7 working days after the final results publish</TextNormal>
        </BoxText>
    </WrapperContent>
}

export default GetRewardContent;