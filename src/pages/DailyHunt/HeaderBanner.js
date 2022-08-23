import React from 'react';
import styled from 'styled-components';
import ButtonLayer from '../../components/ButtonLayer';

const CloudImageLeft = styled.img`
    position: absolute;
    top: 40%;
    left: 0;
    width: 60%;
`

const WrapperBanner = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 5fr 7fr;
    position: relative;
    height: 500px;
    padding-bottom: 150px;

    @media (max-width: 767px) {
        display: flex;
        flex-direction: column;
    }
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

    @media (max-width: 767px) {
        padding-top: 100px;
    }
`

const LeftBanner = styled.div`
    margin-left: 70px;

    @media (max-width: 767px) {
        margin-left: 0px;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const RightBanner = styled.div`
    position: relative;
    margin-right: 70px;
    @media (max-width: 767px) {
        margin-right: 0px;
        margin-top: 30px;
    }
`

const ImageLayerRight = styled.img`
    width: 80%;
    height: auto;
    position: absolute;
    right: 0;
    top: 0;

    @media (max-width: 767px) {
        width: 90%;
        left: 5%;
        right: 5%;
    }
`

const ImageRight = styled.img`
    width: 85%;
    height: auto;
    position: absolute;
    top: 35px;
    right: 20px;

    @media (max-width: 767px) {
        width: 80%;
        right: 10%;
        left: 10%;
    }
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
    line-height: 59px;
    color: rgba(255, 255, 255, 0.87);
`

const Desc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 48px;
    color: rgba(255, 255, 255, 0.87);
    display: inline-block;
`

const TextNumber = styled(Desc)`
    color: #00D1AC;
    margin-bottom: 0;
    font-size: 1.6rem;
`

const TextLua = styled(Desc)`
    color: #FABC46;
    margin-bottom: 0;
    font-size: 1.6rem;
`

const WrapperDesc = styled.div`
    margin-bottom: 45px;
`

const WrapperBtn = styled.div`
    position: relative;
`

const SecondLineImg = styled.img`
    position: absolute;
    left: 220px;
    top: 24px;
`
const Btn = styled.div`
    width: 180px;
`

const HeaderBanner = ({onClickAction}) => {
    return <WrapperHeader>
        <CloudImage src='/assets/images/cloud2.png'/>
        <CloudImageLeft src='/assets/images/cloud4.png'/>
        <WrapperBanner>
            <LeftBanner>
                <Title>
                    Daily Hunt
                </Title>
                <WrapperDesc>
                    <Desc>Complete daily tasks to win a part of</Desc>
                    <Desc><TextNumber>15,000</TextNumber> <TextLua>$LUA</TextLua></Desc></WrapperDesc>
                <WrapperBtn>
                    <Btn>
                        <ButtonLayer onPress={onClickAction}>
                            Join Now
                        </ButtonLayer>
                    </Btn>
                    <SecondLineImg src='/assets/images/line-2.png' />
                </WrapperBtn>
            </LeftBanner>
            <RightBanner>
                <ImageLayerRight src='/assets/images/back-layer-img-header-home.png' />
                <ImageRight src='/assets/images/img-header-daily-hunt.png' />
            </RightBanner>
        </WrapperBanner>
    </WrapperHeader>
}

export default HeaderBanner;