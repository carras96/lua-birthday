import React from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import PageMenu from '../../components/PageMenu';
import HeaderBanner from './HeaderBanner';
import Rules from './Rules';

const WrapperDailyHunt = styled.div`
`

const DailyHunt = () => {
    return <WrapperDailyHunt>
        <PageMenu/>
        <HeaderBanner/>
        <Rules/>
        <Footer />
    </WrapperDailyHunt>
}

export default DailyHunt;