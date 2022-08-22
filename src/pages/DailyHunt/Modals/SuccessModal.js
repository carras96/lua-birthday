import React from 'react';
import { ArrRight, ButtonModal, GuideDetail, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreen, TextGuide, TitleGuide, Wrapper } from './styles';

const SuccessModal = ({toggleModal}) => {
    return <Wrapper>
        <ModalTitle>You’re almost done!</ModalTitle>
        <ModalDesc>Answers recorded!</ModalDesc>
        <ModalDesc>Are you sure you want to submit all these answers? </ModalDesc>
        <ButtonModal>DONE!</ButtonModal>
    </Wrapper>
}

export default SuccessModal;