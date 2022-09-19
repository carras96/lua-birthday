import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: auto;
    margin: 200px 0;
    cursor: pointer;
`

const AdsImage = () => {
    const onClick = () => {
        window.open('https://forum.tomochain.com/t/luaswap-ama-homestead-planning-latest-progress-partnership-more/2453', '_blank', 'noopener,noreferrer');
    }
    return <Img onClick={onClick} src={`${process.env.PUBLIC_URL}/assets/images/image-ads.png`}/>
}

export default AdsImage;