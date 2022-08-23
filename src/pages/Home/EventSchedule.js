import React, { useMemo } from 'react';
import styled from 'styled-components';
import EventCard from '../../components/EventCard';

const WrapperEventSchedule = styled.div`
   
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 59px;
    margin: 0 70px;

    @media (max-width: 767px) {
        text-align: center;
    }
`

const TitleGreen = styled.span`
    color: #37CD95;
`

const TitleYellow = styled.span`
    color: #FABC46;
`

const Schedule = styled.div`
    min-width: 1000px;
`

const WrapperSchedule = styled.div`
    margin: 0 50px;
    padding: 220px 100px 0 100px;
    overflow-x: auto;
`

const GridSchedule = styled.div`
    display: grid;
    grid-template-columns: 20% 11.8% 17.1% 11.5% 11.8% 8.6% 8.5% 11.4%;
`

const ScheduleHeader = styled(GridSchedule)`
    
`

const ShceduleContent = styled(GridSchedule)`
    // height: 500px;
    margin-top: 25px;
    grid-template-rows: repeat(5, 1fr);
    row-gap: 20px;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 24px;
        height: 24px;
        border-left: 1px solid rgba(255, 255, 255, 0.6);
        border-bottom: 1px solid rgba(255, 255, 255, 0.6);
        z-index: 2;
    }
`

const WrapperTimeText = styled.div`
    // width: ${props => props.width};
`

const MonthText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 24px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
`

const DayText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 2rem;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.87);
`

const TextHeader = styled.div`
    width: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -20px;
    position: relative;

    &:after {
        content: '';
        display: ${props => props.isShowBorder ? 'block' : 'none'};
        position: absolute;
        height: 850px;
        width: 1px;
        background-color: #121212;
        bottom: -25px;
        left: 20px;
        transform: translateY(850px);
        z-index: 1;
    }
`

const CakeImg = styled.img`
    width: 32px;
    height: 32px;
`

const WrapperCake = styled.div`
    position: absolute;
    top: -40px;
     &:before {
        content: '';
        box-shadow: 0 0 150px 50px yellow;
        border-radius: 50%;
        width: 0px;
        height: 0px;
        position: absolute;
        left: 16px;
        top: 16px;
     }
`

const DAYS_EVENTS = [
    {
        day: 25,
        month: 'AUG',
        event: [
            [
                {
                    title: '#LuaTurns2 Profile Design Contest',
                    content: '5,000 $LUA to win',
                    colStart: 1,
                    colEnd: 2,
                    rowStart: 1,
                    rowEnd: 2,
                    isFullWidth: true,
                    detail: {
                        title: '#LuaTurns2 Profile Design Contest',
                        content: 'Flex your artistic muscles to render the best LuaSwap birthday profile! \nRewards up to 5,000 $LUA!',
                        time: '25 Aug - 1 Sep, 2022'
                    },
                }
            ]
        ]
    },
    {
        day: 1,
        month: 'SEP',
        event: [
            [
                {
                    title: 'Cross-word minigame',
                    content: '5,000 LUA for 5 winners',
                    detail: {
                        title: 'Cross-word minigame',
                        content: 'Join the mind-blowing game to earn some lucky $LUA rewards! It would be fun! \n5000 LUA for 5 winners',
                        time: '1 - 4 Sep, 2022'
                    },
                    colStart: 2,
                    colEnd: 3,
                    rowStart: 2,
                    rowEnd: 3,
                }
            ]
        ]
    },
    {
        day: 5,
        month: 'SEP',
        event: [
            [
                {
                    title: 'KOL challenge',
                    content: '10,000 LUA to win!',
                    colStart: 3,
                    colEnd: 4,
                    rowStart: 2,
                    rowEnd: 3,
                    detail: {
                        title: 'KOL challenge',
                        content: 'What crypto KOL would you invite to our party? Tag them and share some attractive rewards! \n10000 LUA to win!',
                        time: '5 - 10 Sep, 2022'
                    },
                }
            ]
        ]
    },
    {
        day: '',
        month: '',
        event: [
            [
                {
                    title: 'LuaStarter Learn-and-Earn',
                    content: '5,000 LUA prize pool!',
                    colStart: 4,
                    colEnd: 5,
                    rowStart: 2,
                    rowEnd: 3,
                    isFullWidth: true,
                    detail: {
                        title: 'LuaStarter Learn-and-Earn',
                        content: 'Learn about #LuaStarter IDO launchpad & join the prize-winning quiz: 5000 LUA prize pool!',
                        time: '12 - 15 Sep, 2022'
                    },
                }
            ],
            [
                {
                    title: 'AMA',
                    content: '',
                    colStart: 4,
                    colEnd: 5,
                    rowStart: 3,
                    rowEnd: 4,
                    isYellowEvent: true,
                    detail: {
                        title: `AMA - Updated roadmap & what's next?`,
                        content: 'Meet us at the important AMA where we will be releasing our updated roadmap! \n10,000 LUA for lucky participants!',
                        time: '1PM UTC, 14 Sep'
                    },
                }
            ]
        ]
    },
    {
        day: 15,
        month: 'SEP',
        event: [
            [
                {
                    title: 'The Biggest Birthday Airdrop!',
                    content: 'Share the 30,000 LUA birthday gift!',
                    colStart: 5,
                    colEnd: 8,
                    rowStart: 3,
                    rowEnd: 4,
                    isFullWidth: true,
                    detail: {
                        title: `The Biggest Birthday Airdrop!`,
                        content: 'Participate in the Gleam campaign and book a slot among the lucky winners! \nShare the 30,000 LUA birthday gift!',
                        time: '15 - 25 Sep, 2022'
                    },
                }
            ]
        ]
    },
    {
        day: 19,
        month: 'SEP',
        event: [
            [
                {
                    title: '120,000 LUA Trading competition',
                    content: `It's competition time!`,
                    colStart: 6,
                    colEnd: 8,
                    rowStart: 4,
                    rowEnd: 5,
                    isYellowEvent: true,
                    isFullWidth: true,
                    detail: {
                        title: `120,000 LUA Trading competition`,
                        content: `It's competition time! Are you In-it to Win-it?`,
                        time: '19 - 25 Sep, 2022'
                    },
                }
            ],
            [
                {
                    title: 'Daily Hunt',
                    content: `15,000 LUA to reward players' commitment`,
                    colStart: 7,
                    colEnd: 9,
                    rowStart: 5,
                    rowEnd: 6,
                    isFullWidth: true,
                    detail: {
                        title: `Daily Hunt`,
                        content: `Complete daily series of missions to earn attractive bonuses! \n15,000 LUA to reward players' commitment`,
                        time: '22 - 28 Sep, 2022'
                    },
                }
            ]
        ]
    },
    {
        day: '',
        month: '',
        event: []
    },
    {
        day: 25,
        month: 'SEP',
        isBirthDay: true,
        event: []
    }
]



const EventSchedule = () => {

    const LIST_EVENTS = useMemo(() => {
        let result = [];
        DAYS_EVENTS.forEach((time, index) => {
            time.event.forEach((rowEvt, i) => {
                result.push(rowEvt)
            });
        });
        return result;
    }, []);

    return <WrapperEventSchedule>
        <Title><TitleYellow>Event</TitleYellow> <TitleGreen>Schedule</TitleGreen></Title>
        <WrapperSchedule>
            <Schedule>
                <ScheduleHeader>
                    {
                        DAYS_EVENTS.map((time, index) => <WrapperTimeText key={'header' + index}>
                            <TextHeader isShowBorder={!!time.day}>
                                {
                                    time.isBirthDay && <WrapperCake>
                                        <CakeImg src='assets/images/cake-icon.png' />
                                    </WrapperCake>
                                }
                                <MonthText>{time.month}</MonthText>
                                <DayText>{time.day}</DayText>
                            </TextHeader>
                        </WrapperTimeText>)
                    }
                </ScheduleHeader>
                <ShceduleContent>
                    {
                        LIST_EVENTS.map((rowEvt, i) => {
                            return rowEvt.map(evt => <EventCard event={evt} key={evt.title} />)
                        })
                    }
                </ShceduleContent>
            </Schedule>
        </WrapperSchedule>
    </WrapperEventSchedule>
}

export default EventSchedule;