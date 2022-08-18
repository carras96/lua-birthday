import React, { useRef } from 'react';
import styled from 'styled-components';
import AdsImage from './AdsImage';
import BlackShawDowBlock from './BlackShawDowBlock';
import Community from './Community';
import EventSchedule from './EventSchedule';
import Footer from '../../components/Footer';
import HeaderBanner from './HeaderBanner';
import Launchpad from './Launchpad';
import MenuHomeCard from './MenuHomeCard';
import Milestones from './Milestones';
import Note from './Note';

const WrapperHome = styled.div`
`

const Home = () => {

    return <WrapperHome>
        <HeaderBanner />
        <BlackShawDowBlock />
        <MenuHomeCard />
        <AdsImage />
        <EventSchedule />
        <Milestones />
        <Launchpad />
        <Community />
        <Note />
        <Footer />
    </WrapperHome>
}

export default Home;