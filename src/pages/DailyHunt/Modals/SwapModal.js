import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, GuideDetail, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const SwapModal = ({ toggleModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { swap: sessionStorage.getItem('swap') },
    });

    const onSubmit = data => {
        sessionStorage.setItem('swap', data.swap);
        toggleModal();
    };

    return <Wrapper>
        <ModalTitle>Swap</ModalTitle>
        <ModalDesc>Swap at least 15,000 LUA to be eligible</ModalDesc>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputTitle>Your Swap transaction</InputTitle>
            <InputModal placeholder='0x...' {...register("swap", { required: true })} />
            <ButtonModal type="submit" disabled={errors.swap}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
        <TitleGuide>How to do it?</TitleGuide>
        <GuideDetail>
            <TextGuide>1. Go to <TextGreen href='https://app.luaswap.org/#/swap' target='_blank'>Swap</TextGreen> tab</TextGuide>
            <TextGuide>2. Choose the trading pair</TextGuide>
            <TextGuide>3. Enter the amount of at least 15,000 LUA then click <b>Swap</b> button</TextGuide>
            <TextGuide>4. Input the gas prices you wish to pay then click <b>Confirm</b></TextGuide>
            <TextGuide>5. Put the Tx Hash in the box above 👆</TextGuide>
        </GuideDetail>
    </Wrapper>
}

export default SwapModal;