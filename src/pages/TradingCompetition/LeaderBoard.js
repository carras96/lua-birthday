import React, { useState } from 'react';
import styled from 'styled-components';
import BaseModal from '../../components/BaseModal';
import Bubble from '../../components/Bubble';
import PosCard from '../../components/PosCard';
import LeaderBoardModal from './Modals/LeaderBoardModal';

const WrapperLeaderBoard = styled.div`
    margin-top: 300px;
    position: relative;
    margin-bottom: 250px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 59px;
`

const TitleGreen = styled.span`
    color: #37CD95;
`

const TitleYellow = styled.span`
    color: #FABC46;
`

const Header = styled.div`
    display: flex;
    margin: 0 15% 50px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (max-width: 767px) {
        text-align: center;
    }
`

const GradiantText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 78px;
    text-transform: uppercase;

    background: linear-gradient(180deg, rgba(85, 85, 85, 0.4) 22.88%, rgba(20, 20, 20, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: -40px;

    @media (max-width: 767px) {
        font-size: 3rem;
        line-height: 54px;
        margin-bottom: -20px;
    }
`

const CloudImage = styled.img`
    position: absolute;
    top: 50px;
    left: 0;
    width: 70%;
`

const FirstBubbleSection = styled.div`
    height: 150px;
    position: relative;
`

const Main = styled.div`
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    height: 300px;
    column-gap: 60px;
    margin: 0 180px;

    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
        height: 900px;
    }

    @media (max-width: 767px) {
        margin: 0 50px;
    }
`

const WrappPosCard = styled.div`
    width: ${props => props.width};
    height: ${props => props.height};
    align-self: ${props => props.alignSelf};

    @media (max-width: 1200px) {
        padding-bottom: 50px;
    }
`

const WrappButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.div`
    width: 178px;
    height: 48px;
    border: 1px solid #FFFFFF;
    font-style: normal;
    font-weight: 500;
    font-size: 1.1rem;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.87);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover {
        color: rgba(0, 0, 0, 0.87);
        background-color: rgba(255, 255, 255, 0.87);
    }
`

const LeaderBoard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [opacity, setOpacity] = useState(0);

    const toggleModal = (e) => {
        setOpacity(0);
        setIsOpen(!isOpen);
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
    return <WrapperLeaderBoard>
        <CloudImage src='/assets/images/cloud.png' />
        <Header>
            <GradiantText>Leader Board</GradiantText>
            <Title>
                <TitleYellow>Leader</TitleYellow> <TitleGreen>Board</TitleGreen>
            </Title>
        </Header>
        <FirstBubbleSection>
            <Bubble width={'16px'} isSort top='40%' left='15%' />
            <Bubble width={'24px'} top='20%' right='10%' />
            <Bubble width={'16px'} top='25%' right='15%' />
        </FirstBubbleSection>
        <Main>
            <WrappPosCard width='100%' height='66.67%' alignSelf='end'>
                <PosCard pos={2} />
            </WrappPosCard>
            <WrappPosCard width='100%' height='100%' alignSelf='start'>
                <PosCard pos={1} />
            </WrappPosCard>
            <WrappPosCard width='100%' height='66.67%' alignSelf='end'>
                <PosCard pos={3} />
            </WrappPosCard>
        </Main>
        <FirstBubbleSection>
            <Bubble width={'24px'} top='50%' left='20%' />
            <Bubble width={'16px'} top='75%' left='5%' />
        </FirstBubbleSection>
        <WrappButton>
            <Button onClick={toggleModal}>View top 20</Button>
        </WrappButton>
        <BaseModal
            afterOpen={afterOpen}
            beforeClose={beforeClose}
            opacity={opacity}
            isOpen={isOpen}
            toggleModal={toggleModal}
            width='700px'
            height='435px'
        >
            <LeaderBoardModal />
        </BaseModal>
    </WrapperLeaderBoard>

}

export default LeaderBoard;