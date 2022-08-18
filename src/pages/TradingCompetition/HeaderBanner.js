import React from 'react';
import styled from 'styled-components';
import ButtonLayer from '../../components/ButtonLayer';

const WrapperBanner = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 7fr;
    position: relative;
    height: 500px;
    padding-bottom: 150px;
`

const CloudImage = styled.img`
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
`

const WrapperHeader = styled.div`
    position: relative;
    padding-top: 250px;
`

const LeftBanner = styled.div`
    margin-left: 70px;
`

const RightBanner = styled.div`
    position: relative;
    margin-right: 70px;
`

const ImageLayerRight = styled.img`
    width: 80%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;
`

const ImageRight = styled.img`
    width: 85%;
    height: auto;
    position: absolute;
    top: 35px;
    right: 20px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
    color: rgba(255, 255, 255, 0.87);
`

const Desc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.87);
    display: inline-block;
`

const TextNumber = styled(Desc)`
    color: #00D1AC;
    margin-bottom: 0;
    font-size: 26px;
`

const TextLua = styled(Desc)`
    color: #FABC46;
    margin-bottom: 0;
    font-size: 26px;
`

const WrapperDesc = styled.div`
    margin-bottom: 45px;
`

const WrapperBtn = styled.div`
    position: relative;
`

const SecondLineImg = styled.img`
    position: absolute;
    left: 0;
    bottom: 0;
`
const Btn = styled.div`
    width: 200px;
`
const ArrowUpImg = styled.img``

const HeaderBanner = () => {
    return <WrapperHeader>
        <CloudImage src='/assets/images/cloud2.png'/>
        <WrapperBanner>
            <SecondLineImg src='/assets/images/roket-line-2.png' />
            
            <LeftBanner>
                <Title>
                Trading Competition
                </Title>
                <WrapperDesc>
                    <Desc>Celebrate the LuaSwap’s 2nd Birthday &</Desc>
                    <Desc>trade to win up to <TextNumber>120,000</TextNumber> <TextLua>$LUA!</TextLua></Desc></WrapperDesc>
                <WrapperBtn>
                    <Btn>
                        <ButtonLayer onPress={() => { }}>
                            Join Now <ArrowUpImg src='/assets/images/arrow-up.png'/>
                        </ButtonLayer>
                    </Btn>
                </WrapperBtn>
            </LeftBanner>
            <RightBanner>
                <ImageLayerRight src='/assets/images/back-layer-img-header-home.png' />
                <ImageRight src='/assets/images/img-header-competition.png' />
            </RightBanner>
        </WrapperBanner>
    </WrapperHeader>
}

export default HeaderBanner;