import React from 'react';
import styled from 'styled-components';

const WrapperFooter = styled.div`
    margin-top: 120px;
    background-image: url('assets/images/line-footer.png');
    width: 100%;
    aspect-ratio: 6.97;
    background-size: contain;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 150px;
    background-position: bottom;
`
const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.1rem;
    line-height: 21px;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
`

const Icon = styled.div`
    margin: 0 12px;
    width: 32px;
    height: 32px;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:hover {
        background-image: url(${props => props.srcHover});
        transition: all 0.3s ease-in-out;
    }
`

const WrappIcon = styled.div`
    margin-top: 35px;
    display: flex;
`

const Footer = () => {
    const openLink = (link) => {
        window.open(link, '_blank', 'noopener,noreferrer');
    }
    return <WrapperFooter>
        <Text>Join us to build a decentralized future</Text>
        <WrappIcon>
            <Icon src='assets/images/Tw.png' srcHover='assets/images/Tw-hover.png' onClick={() => openLink('https://twitter.com/luaswap')}/>
            <Icon src='assets/images/Tele.png' srcHover='assets/images/Tele-hover.png' onClick={() => openLink('https://t.me/luaswap')}/>
            <Icon src='assets/images/Me.png' srcHover='assets/images/Me-hover.png' onClick={() => openLink('https://medium.com/luaswap')}/>
            <Icon src='assets/images/Git.png' srcHover='assets/images/Git-hover.png' onClick={() => openLink('https://github.com/tomochain/luaswap-core')}/>
        </WrappIcon>
    </WrapperFooter>
}

export default Footer;