import React from 'react';
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
import { Element, scroller } from 'react-scroll';

const WrapperHome = styled.div`
`

const Home = () => {

    const scrollToHomeCard = () => {
        scroller.scrollTo('home-card', {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return <WrapperHome>
        <HeaderBanner onClickAction={scrollToHomeCard} />
        <Element name='home-card'>
            <BlackShawDowBlock />
            <MenuHomeCard />
        </Element>
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