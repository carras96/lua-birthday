import React from 'react';
import { ButtonModal, GuideDetail, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const StakeModal = () => {
    return <Wrapper>
        <ModalTitle>Stake</ModalTitle>
        <ModalDesc>Stake at least 1,000 LUA in LuaSafe to be eligible</ModalDesc>
        <InputTitle>Your Stake transaction</InputTitle>
        <InputModal placeholder='0x...'/>
        <ButtonModal>Save</ButtonModal>
        <TitleGuide>How to do it?</TitleGuide>
        <GuideDetail>
            <TextGuide>1. Go to <TextGreen href='https://luaswap.org/#/' target='_blank'>LuaSafe</TextGreen> tab</TextGuide>
            <TextGuide>2. <b>Approve</b> the LUA token</TextGuide>
            <TextGuide>3. Click <b>Stake</b> button and enter the number of LUA you want to stake (at least 1,000 LUA)</TextGuide>
            <TextGuide>4. Click <b>Confirm</b></TextGuide>
            <TextGuide>5. Put the Tx Hash in the box above 👆</TextGuide>
        </GuideDetail>
    </Wrapper>
}

export default StakeModal;