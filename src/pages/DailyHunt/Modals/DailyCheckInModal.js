import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, InputModal, InputTitle, ModalTitle, Wrapper } from './styles';

const DailyCheckInModal = ({ toggleModal }) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { checkIn: sessionStorage.getItem('checkIn') },
    });

    const onSubmit = data => {
        sessionStorage.setItem('checkIn', data.checkIn);
        toggleModal();
    };

    return <Wrapper>
        <ModalTitle>Daily check in </ModalTitle>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
            <InputTitle>Your wallet address</InputTitle>
            <InputModal placeholder='0x...' {...register("checkIn", { required: true })} />
            <ButtonModal type="submit" disabled={errors.checkIn || !watch("checkIn")}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
    </Wrapper>
}

export default DailyCheckInModal;