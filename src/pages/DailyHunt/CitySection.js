import React, { useState } from 'react';
import styled from 'styled-components';
import BaseModal from '../../components/BaseModal';
import StakeModal from './Modals/StakeModal';
import SwapModal from './Modals/SwapModal';

const WrapperCity = styled.div`
    background-image: url('/assets/images/bg-line-city.png');
    width: 100%;
    aspect-ratio: 3.71;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-position: bottom;
    position: relative;
`

const CityImage = styled.img`
    width: 100%;
`

const WrapperImage = styled.div`
    width: 80%;
    position: relative;
`

const CircleImg = styled.img``

const BoxMessage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    position: absolute;
    top: ${props => props.top ? props.top : 'unset'};
    right: ${props => props.right ? props.right : 'unset'};
    left: ${props => props.left ? props.left : 'unset'};
    bottom: ${props => props.bottom ? props.bottom : 'unset'};
`

const MessageTextBox = styled.div`
    border: 1px solid #D9D9D9;
    display: inline-block;
    padding: 20px 15px;
    position: relative;
    margin-bottom: 25px;
    cursor: pointer;
    background: #040406;

    &:hover {
        transform: scale(1.1);
        transition : all 0.5s ease-in-out;
    }

    &:after {
        content: '';
        position: absolute;
        width: 16px;
        height: 16px;
        border: 1px solid #D9D9D9;
        background: #040406;
        bottom: -10px;
        left: calc(50% - 8px);
        transform: rotate(45deg);
        border-top: none;
        border-left: none;
    }
`

const MessageTextBoxResult = styled(MessageTextBox)`
    display: flex;
    align-items: center;
    &:after {
        display: none;
    }
`

const Text = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.87);
`

const TextYellow = styled(Text)`
    color: #FABC46;
`

const ArrIcon = styled.img`
    margin-left: 8px;
`

const CitySection = () => {

    const [isOpenSwap, setIsOpenSwap] = useState(false);
    const [isOpenStake, setIsOpenStake] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const toggleModalSwap = (e) => {
        setOpacity(0);
        setIsOpenSwap(!isOpenSwap);
    }

    const toggleModalStake = (e) => {
        setOpacity(0);
        setIsOpenStake(!isOpenStake);
    }

    const afterOpen = () => {
        setTimeout(() => {
            setOpacity(1);
        }, 100);
    }

    const beforeClose = () => {
        return new Promise((resolve) => {
            setOpacity(0);
            setTimeout(resolve, 300);
        });
    }

    return <WrapperCity>
        <WrapperImage>
            <CityImage src='/assets/images/city.png' />
            <BoxMessage top='45%' left='10%'>
                <MessageTextBox onClick={toggleModalSwap}>
                    <Text>Swap</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='20%' left='26%'>
                <MessageTextBox>
                    <Text>Daily check in</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='20%' right='32%'>
                <MessageTextBox>
                    <Text>Daily quiz</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='45%' right='10%'>
                <MessageTextBox>
                    <Text>Social tasks</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage bottom='13%' left='46%' onClick={toggleModalStake}>
                <MessageTextBox>
                    <Text>Stake</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>
        </WrapperImage>

        <BoxMessage bottom='0%' left='0%'>
            <MessageTextBoxResult>
                <TextYellow>Check result</TextYellow> <ArrIcon src='/assets/images/arr-up-yellow.png' />
            </MessageTextBoxResult>
        </BoxMessage>

        <BaseModal afterOpen={afterOpen} beforeClose={beforeClose} opacity={opacity} isOpen={isOpenSwap} toggleModal={toggleModalSwap} width='380px' height='460px'>
            <SwapModal />
        </BaseModal>

        <BaseModal afterOpen={afterOpen} beforeClose={beforeClose} opacity={opacity} isOpen={isOpenStake} toggleModal={toggleModalStake} width='380px' height='460px'>
            <StakeModal />
        </BaseModal>
    </WrapperCity>
}

export default CitySection;