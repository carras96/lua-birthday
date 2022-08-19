import React from 'react';
import Modal from 'styled-react-modal';
import styled from 'styled-components';


export const StyledBaseModal = Modal.styled`
    width: ${props => props.width ? props.width : '40vw'};
    height: ${props => props.height ? props.height : '60vh'};
    display: flex;
    align-items: center;
    justify-content: center;
    background: #040406;
    border-radius: 20px;
    opacity: ${(props) => props.opacity};
    transition : all 0.3s ease-in-out;
    position: relative;
    padding: 24px;
`

const CloseBtnModal = styled.img`
    position: absolute;
    bottom: -65px;
    cursor: pointer;
    opacity: 0.8;

    &:hover {
        opacity: 1;
        transform: scale(1.1);
        transition : all 0.5s ease-in-out;
    }
`

const BaseModal = ({children, isOpen, afterOpen, beforeClose, toggleModal, opacity, width, height}) => {
    return <StyledBaseModal
        isOpen={isOpen}
        afterOpen={afterOpen}
        beforeClose={beforeClose}
        onBackgroundClick={() => {}}
        onEscapeKeydown={toggleModal}
        opacity={opacity}
        backgroundProps={{ opacity }}
        width={width}
        height={height}
    >
        {children}
        <CloseBtnModal src='/assets/images/close-modal-btn.png' onClick={toggleModal}/>
    </StyledBaseModal>
}

export default BaseModal;