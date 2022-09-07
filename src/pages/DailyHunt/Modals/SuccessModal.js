import React from 'react';
import {  ButtonModal, ModalDescSuccess, ModalTitle, Wrapper } from './styles';

const SuccessModal = ({toggleModal}) => {

    return <Wrapper>
        <ModalTitle>You’re almost done!</ModalTitle>
        <ModalDescSuccess>Answers recorded!</ModalDescSuccess>
        <ModalDescSuccess>Are you sure you want to submit all these answers? </ModalDescSuccess>
        <ButtonModal onClick={toggleModal}>DONE!</ButtonModal>
    </Wrapper>
}

export default SuccessModal;