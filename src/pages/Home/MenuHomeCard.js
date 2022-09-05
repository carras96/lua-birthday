import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import HomeCard from '../../components/HomeCard';
import { FadeInBottomDiv } from '../../styles';

const WrapperMenuHomeCard = styled(FadeInBottomDiv)`
    background-image: url('${process.env.PUBLIC_URL}/assets/images/bg-line.png');
    width: 100%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
    min-height: 450px;
`

const WrapperCards = styled.div`
    // display: grid;
    // grid-template-columns: 1fr 1fr 1fr 1fr;
    // column-gap: 20px;
    width: 100%;
    margin: 0 70px;
    padding-top: 50px;

    display: flex;
    justify-content: center;
    flex-flow: wrap;

    @media (max-width: 767px) {
        margin: 0;
    }
`

const Card = styled.div`
    display: flex;
    align-items: ${props => props.number % 2 !== 1 ? "flex-start" : "flex-end"};
    width: 15%;
    min-width: 300px;
    margin: 10px;
`

const LIST_CARD = [
    {
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image24.png`,
        title: '$LUA social contest',
        desc: 'Join  mini game series and accept our challenges to win ',
        link: '#',
        isOpenExtraLink: true,
        date: '',
        isDisable: true
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image23.png`,
        title: 'Gleam mission',
        desc: 'Complete the tasks to get decent rewards',
        link: '#',
        isOpenExtraLink: true,
        date: 'Start on 15 Sep, 2022',
        isDisable: true
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image21.png`,
        title: 'Trading competition',
        desc: 'Trade to share a reward pool of 120,000 $LUA',
        link: '/trading-competition',
        date: 'Start on 19 Sep, 2022',
        isDisable: true
    },
    {
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image22.png`,
        title: 'Daily hunt',
        desc: 'Conquer treasure city to earn a daily attractive bonus',
        link: '/daily-hunt',
        date: 'Start on 22 Sep, 2022',
        isDisable: true
    },

]

const MenuHomeCard = () => {
    const navigate = useNavigate();
    const onNavigate = (link, isOpenExtraLink, isDisable) => {
        if (isDisable) {
            return;
        }
        if (isOpenExtraLink) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            navigate(link);
        }
    }
    return <WrapperMenuHomeCard>
        <WrapperCards>
            {LIST_CARD.map((item, index) => <Card key={index} number={index}>
                <HomeCard
                    imgSrc={item.imgSrc}
                    title={item.title}
                    desc={item.desc}
                    date={item.date}
                    onClickNavigate={() => onNavigate(item.link, item.isOpenExtraLink, item.isDisable)}
                />
            </Card>)}
        </WrapperCards>
    </WrapperMenuHomeCard>
}

export default MenuHomeCard;