import React from 'react';
import styled from 'styled-components';
import AdsImage from './AdsImage';
import BlackShawDowBlock from './BlackShawDowBlock';
import EventSchedule from './EventSchedule';
import HeaderBanner from './HeaderBanner';
import MenuHomeCard from './MenuHomeCard';
import Milestones from './Milestones';

const WrapperHome = styled.div`
`

const Home = () => {
    return <WrapperHome>
        <HeaderBanner/>
        <BlackShawDowBlock/>
        <MenuHomeCard/>
        <AdsImage />
        <EventSchedule />
        <Milestones/>
    </WrapperHome>
}

export default Home;