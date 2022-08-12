import React from 'react';
import styled from 'styled-components';
import AdsImage from './AdsImage';
import BlackShawDowBlock from './BlackShawDowBlock';
import HeaderBanner from './HeaderBanner';
import MenuHomeCard from './MenuHomeCard';

const WrapperHome = styled.div`
`

const Home = () => {
    return <WrapperHome>
        <HeaderBanner/>
        <BlackShawDowBlock/>
        <MenuHomeCard/>
        <AdsImage />
    </WrapperHome>
}

export default Home;