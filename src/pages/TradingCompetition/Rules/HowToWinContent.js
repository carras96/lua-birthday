import React from 'react';
import { BoxText, TextBold, TextHref, TextNormal, WrapperContent } from './styles';

const HowToWinContent = () => {
    return <WrapperContent>
        <BoxText>
            <TextBold>Please ensure that you are familiar with LuaSwap before participating in the activity. Step-by-step user guides are listed below.</TextBold>
        </BoxText>
        <BoxText>
            <TextNormal>Detailed tutorial on how to trade on LuaSwap: <TextHref href='https://docs.tomochain.com/luaswap/tutorial' target='blamk'>https://docs.tomochain.com/luaswap/tutorial</TextHref></TextNormal>
        </BoxText>
        <BoxText>
            <TextNormal>How to connect your wallet to TomoChain network: <TextHref href='https://docs.tomochain.com/general/how-to-connect-to-tomochain-network' target='blamk'>https://docs.tomochain.com/general/how-to-connect-to-tomochain-network</TextHref></TextNormal>
        </BoxText>
    </WrapperContent>
}

export default HowToWinContent;