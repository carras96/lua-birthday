import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import PageMenu from '../../components/PageMenu';
import HeaderBanner from './HeaderBanner';
import LeaderBoard from './LeaderBoard';
import Rules from './Rules';

const WrapperTradingCompetition = styled.div`
`

const TradingCompetition = () => {

    const scrollToLeaderBoard = () => {
        scroller.scrollTo('leader-board', {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return <WrapperTradingCompetition>
        <PageMenu/>
        <HeaderBanner />
        <Element name='leader-board'>
            <LeaderBoard />
        </Element>
        <Rules onClickGeneralBtn={scrollToLeaderBoard}/>
        <Footer />
    </WrapperTradingCompetition>
}

export default TradingCompetition;