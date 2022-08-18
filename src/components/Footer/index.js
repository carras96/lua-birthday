import React from 'react';
import styled from 'styled-components';

const WrapperFooter = styled.div`
    margin-top: 120px;
    background-image: url('/assets/images/line-footer.png');
    width: 100%;
    aspect-ratio: 6.97;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
`

const Icon = styled.img`
    margin: 0 12px;
`

const WrappIcon = styled.div`
    margin-top: 35px;
`

const Footer = () => {
    return <WrapperFooter>
        <Text>Join us to build a decentralized future</Text>
        <WrappIcon>
            <Icon src='/assets/images/Tele.png' />
            <Icon src='/assets/images/Git.png' />
            <Icon src='/assets/images/Tw.png' />
            <Icon src='/assets/images/Me.png' />
        </WrappIcon>
    </WrapperFooter>
}

export default Footer;