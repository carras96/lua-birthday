import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from "react-router-dom";
import HomeCard from '../../components/HomeCard';
import { FadeInBottomDiv } from '../../styles';
import { useApi } from '../../hooks/useApi';

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
        id: 'socialContest',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image24.png`,
        title: '$LUA Social Contest',
        desc: 'Join  mini game series and accept our challenges to win ',
        link: 'https://twitter.com/LuaSwap/status/1569323588028874752',
        isOpenExtraLink: true,
        date: '',
        isDisable: false
    },
    {
        id: 'gleamMission',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image23.png`,
        title: 'Gleam Mission',
        desc: 'Complete the tasks to get decent rewards',
        link: '#',
        isOpenExtraLink: true,
        date: 'Start on 15 Sep, 2022',
        isDisable: true
    },
    {
        id: 'tradingCompetition',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image21.png`,
        title: 'Trading Competition',
        desc: 'Trade to share a reward pool of 120,000 $LUA',
        link: '/trading-competition',
        date: 'Start on 19 Sep, 2022',
        isDisable: true
    },
    {
        id: 'dailyHunt',
        imgSrc: `${process.env.PUBLIC_URL}/assets/images/image22.png`,
        title: 'Daily Hunt',
        desc: 'Conquer treasure city to earn a daily attractive bonus',
        link: '/daily-hunt',
        date: 'Start on 22 Sep, 2022',
        isDisable: true
    },

]

const MenuHomeCard = () => {

    const [cardsData, setCardsData] = useState(LIST_CARD)

    const { getEventConfig } = useApi()

    useEffect(() => {
        const fetchEventConfig = async () => {
            const {data = {}} = await getEventConfig();
            let tempData = [...cardsData];
            Object.keys(data).forEach(key => {
                const card = tempData.find(item => item.id === key)
                if (card) {
                    card.isDisable = !data[key]
                    // card.isDisable = false
                }
            })
            setCardsData(tempData)
        }
        fetchEventConfig()
    }, [])

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
            {cardsData.map((item, index) => <Card key={index} number={index}>
                <HomeCard
                    imgSrc={item.imgSrc}
                    isDisable={item.isDisable}
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