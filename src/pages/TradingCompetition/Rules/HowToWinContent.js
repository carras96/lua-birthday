import React from 'react';
import { BoxText, TextBold, TextHref, TextNormal, WrapperContent } from './styles';

const HowToWinContent = () => {
    return <WrapperContent>
        <BoxText>
            <TextBold>Please ensure that you are familiar with LuaSwap before participating in the activity. Step-by-step user guides are listed below.</TextBold>
        </BoxText>
        <BoxText>
            <TextNormal><TextHref href='https://docs.tomochain.com/luaswap/tutorial' target='blamk'>Detailed tutorial</TextHref> on how to trade on LuaSwap.</TextNormal>
        </BoxText>
        <BoxText>
            <TextNormal><TextHref href='https://docs.tomochain.com/general/how-to-connect-to-tomochain-network' target='blamk'>How to connect</TextHref> your wallet to TomoChain network.</TextNormal>
        </BoxText>
    </WrapperContent>
}

export default HowToWinContent;