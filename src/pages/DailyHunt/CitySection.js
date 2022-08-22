import React, { useState } from 'react';
import styled from 'styled-components';
import BaseModal from '../../components/BaseModal';
import DailyCheckInModal from './Modals/DailyCheckInModal';
import DailyQuizModal from './Modals/DailyQuizModal';
import ResultModal from './Modals/ResultModal';
import SocialTasksModal from './Modals/SocialTasksModal';
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
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    background: ${props => props.isDone ? '#D9D9D9' : '#040406'};
    transition : all 0.5s ease-in-out;

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
        background: ${props => props.isDone ? '#D9D9D9' : '#040406'};
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
    color: ${props => props.isDone ? '#1A191E' : 'rgba(255, 255, 255, 0.87)'};
`

const TextYellow = styled(Text)`
    color: #FABC46;
`

const ArrIcon = styled.img`
    margin-left: 8px;
`

const WrappSubmitButton = styled.div`
    padding: 16px 20%;
    background: linear-gradient(89.81deg, rgba(26, 25, 30, 0) 0.15%, rgba(26, 25, 30, 0.5) 51.55%, rgba(26, 25, 30, 0) 99.83%);
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 50%;
    position: absolute;
    top: 50%;
`

const SubmitAnswerButton = styled.div`
    background: #1A191E;
    border: 1px solid #FFFFFF;
    height: 48px;
    padding: 0 48px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: #FABC46;
    max-width: 280px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    transition : all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition : all 0.5s ease-in-out;
    }
`

const CitySection = () => {

    const [isOpenSwap, setIsOpenSwap] = useState(false);
    const [isOpenStake, setIsOpenStake] = useState(false);
    const [isOpenDailyCheckIn, setIsOpenDailyCheckIn] = useState(false);
    const [isOpenSocialTasks, setIsOpenSocialTasks] = useState(false);
    const [isOpenDailyQuiz, setIsOpenDailyQuiz] = useState(false);
    const [isOpenResult, setIsOpenResult] = useState(false);

    const [opacity, setOpacity] = useState(0);

    const toggleModalSwap = (e) => {
        setOpacity(0);
        setIsOpenSwap(!isOpenSwap);
    }

    const toggleModalStake = (e) => {
        setOpacity(0);
        setIsOpenStake(!isOpenStake);
    }

    const toggleModalDailyCheckIn = (e) => {
        setOpacity(0);
        setIsOpenDailyCheckIn(!isOpenDailyCheckIn);
    }

    const toggleModalSocialTasks = (e) => {
        setOpacity(0);
        setIsOpenSocialTasks(!isOpenSocialTasks);
    }

    const toggleModalDailyQuiz = (e) => {
        setOpacity(0);
        setIsOpenDailyQuiz(!isOpenDailyQuiz);
    }

    const toggleModalResult = (e) => {
        setOpacity(0);
        setIsOpenResult(!isOpenResult);
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
            <WrappSubmitButton>
                <SubmitAnswerButton>
                    Submit your answers
                </SubmitAnswerButton>
            </WrappSubmitButton>
            <BoxMessage top='45%' left='10%'>
                <MessageTextBox onClick={toggleModalSwap} isDone={!!sessionStorage.getItem('swap')}>
                    <Text isDone={!!sessionStorage.getItem('swap')}>Swap</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='20%' left='26%'>
                <MessageTextBox onClick={toggleModalDailyCheckIn} isDone={!!sessionStorage.getItem('checkIn')}>
                    <Text isDone={!!sessionStorage.getItem('checkIn')}>Daily check in</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='20%' right='32%'>
                <MessageTextBox onClick={toggleModalDailyQuiz} isDone={!!sessionStorage.getItem('quiz')}>
                    <Text isDone={!!sessionStorage.getItem('quiz')}>Daily quiz</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage top='45%' right='10%'>
                <MessageTextBox onClick={toggleModalSocialTasks}
                    isDone={!!sessionStorage.getItem('name') && !!sessionStorage.getItem('accTw') && !!sessionStorage.getItem('linkTweet')}>
                    <Text
                        isDone={!!sessionStorage.getItem('name') && !!sessionStorage.getItem('accTw') && !!sessionStorage.getItem('linkTweet')}>Social tasks</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>

            <BoxMessage bottom='13%' left='46%' >
                <MessageTextBox onClick={toggleModalStake} isDone={!!sessionStorage.getItem('stake')}>
                    <Text isDone={!!sessionStorage.getItem('stake')}>Stake</Text>
                </MessageTextBox>
                <CircleImg src='/assets/images/circle-position.png' />
            </BoxMessage>
        </WrapperImage>

        <BoxMessage bottom='0%' left='0%'>
            <MessageTextBoxResult onClick={toggleModalResult}>
                <TextYellow>Check result</TextYellow> <ArrIcon src='/assets/images/arr-up-yellow.png' />
            </MessageTextBoxResult>
        </BoxMessage>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenSwap}
            toggleModal={toggleModalSwap}
            width='380px'
            height='460px'>
            <SwapModal toggleModal={toggleModalSwap} />
        </BaseModal>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenStake}
            toggleModal={toggleModalStake}
            width='380px'
            height='460px'>
            <StakeModal toggleModal={toggleModalStake} />
        </BaseModal>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenDailyCheckIn}
            toggleModal={toggleModalDailyCheckIn}
            width='380px'
            height='220px'>
            <DailyCheckInModal toggleModal={toggleModalDailyCheckIn} />
        </BaseModal>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenSocialTasks}
            toggleModal={toggleModalSocialTasks}
            width='380px'
            height='435px'>
            <SocialTasksModal toggleModal={toggleModalSocialTasks} />
        </BaseModal>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenDailyQuiz}
            toggleModal={toggleModalDailyQuiz}
            width='380px'
            height='435px'>
            <DailyQuizModal toggleModal={toggleModalDailyQuiz} />
        </BaseModal>

        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpenResult}
            toggleModal={toggleModalResult}
            width='633px'
            height='435px'>
            <ResultModal toggleModal={toggleModalResult} />
        </BaseModal>
    </WrapperCity>
}

export default CitySection;