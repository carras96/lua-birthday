import React from 'react';
import styled from 'styled-components';

const Img = styled.img`
    width: 100%;
    height: auto;
    margin: 200px 0;
`

const AdsImage = () => {
return <Img src={`${process.env.PUBLIC_URL}/assets/images/image-ads.png`}/>
}

export default AdsImage;