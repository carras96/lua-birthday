import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, ErrorMessage, ErrorMessageBlank, GuideDetail, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const StakeModal = ({ toggleModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { stake: sessionStorage.getItem('stake') },
    });

    const onSubmit = data => {
        sessionStorage.setItem('stake', data.stake);
        toggleModal();
    };
    return <Wrapper>
        <ModalTitle>Stake</ModalTitle>
        <ModalDesc>Stake at least 1,000 LUA in LuaSafe to be eligible</ModalDesc>
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputTitle>Your Stake transaction</InputTitle>
            <InputModal placeholder='0x...' {...register("stake", { required: true, pattern: /^0x([A-Fa-f0-9]{64})$/ })} />
            {
                errors.stake ? <ErrorMessage>
                    {
                        errors.stake.type === 'required' && '*Required field.'
                    }
                    {
                        errors.stake.type === 'pattern' && '*Incorrect format.'
                    }
                </ErrorMessage> : <ErrorMessageBlank/>
            }
            <ButtonModal type="submit" disabled={errors.stake || !watch("stake")}>Save <ArrRight src={`${process.env.PUBLIC_URL}/assets/images/arr-right.png`} /></ButtonModal>
        </form>
        <TitleGuide>How to do it?</TitleGuide>
        <GuideDetail>
            <TextGuide>1. Go to <TextGreen href='https://app.luaswap.org/#/lua-safe' target='_blank'>LuaSafe</TextGreen> tab</TextGuide>
            <TextGuide>2. <b>Approve</b> the LUA token</TextGuide>
            <TextGuide>3. Click <b>Stake</b> button and enter the number of LUA you want to stake (at least 1,000 LUA)</TextGuide>
            <TextGuide>4. Click <b>Confirm</b></TextGuide>
            <TextGuide>5. Put the Tx Hash in the box above 👆</TextGuide>
        </GuideDetail>
    </Wrapper>
}

export default StakeModal;