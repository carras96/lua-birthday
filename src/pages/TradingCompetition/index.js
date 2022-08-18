import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import PageMenu from '../../components/PageMenu';
import HeaderBanner from './HeaderBanner';
import LeaderBoard from './LeaderBoard';
import Rules from './Rules';

const WrapperTradingCompetition = styled.div`
`

const TradingCompetition = () => {
    return <WrapperTradingCompetition>
        <PageMenu/>
        <HeaderBanner />
        <LeaderBoard />
        <Rules />
        <Footer />
    </WrapperTradingCompetition>
}

export default TradingCompetition;