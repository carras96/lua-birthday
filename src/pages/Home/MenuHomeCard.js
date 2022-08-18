import React from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import HomeCard from '../../components/HomeCard';

const WrapperMenuHomeCard = styled.div`
    background-image: url('/assets/images/bg-line.png');
    width: 100%;
    aspect-ratio: 3.7;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
`

const WrapperCards = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    column-gap: 20px;
    width: 100%;
    margin: 0 70px;
    padding-top: 50px;
`

const Card = styled.div`
    display: flex;
    align-items: ${props => props.number % 2 !== 1 ? "flex-start" : "flex-end"};
`

const LIST_CARD = [{
    imgSrc: '/assets/images/image21.png',
    title: 'Trading competition',
    desc: 'Trade to share a reward pool of 120,000 $LUA',
    link: '/trading-competition'
},
{
    imgSrc: '/assets/images/image22.png',
    title: 'Daily hunt',
    desc: 'Conquer treasure fields to earn a daily attractive bonus',
    link: '/daily-hunt',
},
{
    imgSrc: '/assets/images/image23.png',
    title: 'Gleam mission',
    desc: 'Complete the tasks to get decent rewards',
    link: 'https://reactrouter.com/docs/en/v6/hooks/use-navigate',
    isOpenExtraLink: true
},
{
    imgSrc: '/assets/images/image24.png',
    title: '$LUA social contest',
    desc: 'Join  mini game series and accept our challenges to win ',
    link: 'https://reactrouter.com/docs/en/v6/hooks/use-navigate',
    isOpenExtraLink: true
}]

const MenuHomeCard = () => {
    const navigate = useNavigate();
    const onNavigate = (link, isOpenExtraLink) => {
        if (isOpenExtraLink) {
            window.open(link, '_blank', 'noopener,noreferrer');
        } else {
            navigate(link);
        }
    }
    return <WrapperMenuHomeCard>
        <WrapperCards>
            {LIST_CARD.map((item, index) => <Card key={index} number={index}>
                <HomeCard imgSrc={item.imgSrc} title={item.title} desc={item.desc} onClickNavigate={() => onNavigate(item.link, item.isOpenExtraLink)}/>
            </Card>)}
        </WrapperCards>
    </WrapperMenuHomeCard>
}

export default MenuHomeCard;