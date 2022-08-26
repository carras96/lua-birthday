import React from 'react';
import { ArrRight, ButtonModal, GuideDetail, InputModal, InputTitle, ModalDescSuccess, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const SuccessModal = ({toggleModal}) => {
    const onClickDone = () => {
        sessionStorage.clear();
        toggleModal();
    }

    return <Wrapper>
        <ModalTitle>You’re almost done!</ModalTitle>
        <ModalDescSuccess>Answers recorded!</ModalDescSuccess>
        <ModalDescSuccess>Are you sure you want to submit all these answers? </ModalDescSuccess>
        <ButtonModal onClick={onClickDone}>DONE!</ButtonModal>
    </Wrapper>
}

export default SuccessModal;