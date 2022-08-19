import React from 'react';
import { ButtonModal, GuideDetail, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const SwapModal = () => {
    return <Wrapper>
        <ModalTitle>Swap</ModalTitle>
        <ModalDesc>Swap $200 with any pairs on LuaSwap to be eligible</ModalDesc>
        <InputTitle>Your Swap transaction</InputTitle>
        <InputModal placeholder='0x...'/>
        <ButtonModal>Save</ButtonModal>
        <TitleGuide>How to do it?</TitleGuide>
        <GuideDetail>
            <TextGuide>1. Go to <TextGreen href='https://app.luaswap.org/#/swap' target='_blank'>Swap</TextGreen> tab</TextGuide>
            <TextGuide>2. Choose the trading pair</TextGuide>
            <TextGuide>3. Enter the amount equivalent to 200$ then click <b>Swap</b> button</TextGuide>
            <TextGuide>4. Input the gas prices you wish to pay then click <b>Confirm</b></TextGuide>
            <TextGuide>5. Put the Tx Hash in the box above 👆</TextGuide>
        </GuideDetail>
    </Wrapper>
}

export default SwapModal;