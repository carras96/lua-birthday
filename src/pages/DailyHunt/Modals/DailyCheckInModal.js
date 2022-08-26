import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, ErrorMessage, ErrorMessageBlank, InputModal, InputTitle, ModalTitle, Wrapper } from './styles';

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
            <InputModal placeholder='0x...' {...register("checkIn", { required: true, pattern: /^0x([A-Fa-f0-9]{40})$/  })} />
            {
                errors.checkIn ? <ErrorMessage>
                    {
                        errors.checkIn.type === 'required' && '*Required field.'
                    }
                    {
                        errors.checkIn.type === 'pattern' && '*Incorrect format.'
                    }
                </ErrorMessage> : <ErrorMessageBlank/>
            }
            <ButtonModal type="submit" disabled={errors.checkIn || !watch("checkIn")}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
    </Wrapper>
}

export default DailyCheckInModal;