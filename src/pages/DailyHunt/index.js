import React from 'react';
import { Element, scroller } from 'react-scroll';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import PageMenu from '../../components/PageMenu';
import CitySection from './CitySection';
import HeaderBanner from './HeaderBanner';
import Rules from './Rules';

const WrapperDailyHunt = styled.div`
`

const DailyHunt = () => {

    const scrollToCity = () => {
        scroller.scrollTo('city', {
            duration: 1200,
            delay: 0,
            smooth: 'easeInOutQuart'
        })
    }

    return <WrapperDailyHunt>
        <PageMenu />
        <HeaderBanner onClickAction={scrollToCity} />
        <Element name='city'>
            <CitySection />
        </Element>
        <Rules />
        <Footer />
    </WrapperDailyHunt>
}

export default DailyHunt;