import React, { useMemo } from 'react';
import styled from 'styled-components';
import { clickToCopy } from '../../utils/clickToCopy';

const WrapperPosCard = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

const LayerBack = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    border: 1px solid #FFFFFF;
    border-radius: 10px;
`

const MainCard = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    background: #1A191E;
    border-radius: 10px;
    top: 13px;
    right: 12px;
    background-image: url('${process.env.PUBLIC_URL}/assets/images/bg-pos-card.png');
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
`

const WrapperText = styled.div`
    padding: ${props => props.pos === 1 ? '23px 16px 0px' : '8px 22px 0px'};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const PosText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.pos === 1 ? '6rem' : '4rem'};
    line-height: ${props => props.pos === 1 ? '117px' : '78px'};
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 12px;
    display: inline-block;
`

const WrappPostText = styled.div`

`

const SmallPostText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: ${props => props.pos === 1 ? '3rem' : '2rem'};
    line-height: ${props => props.pos === 1 ? '68px' : '49px'};
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 12px;
    display: inline-block;
    vertical-align: top;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.pos === 1 ? '0.9rem' : '0.8'};
    line-height: ${props => props.pos === 1 ? '17px' : '14px'};
    color: rgba(255, 255, 255, 0.37);
`

const VolumeText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.pos === 1 ? '3rem' : '1.5rem'};
    line-height: ${props => props.pos === 1 ? '59px' : '29px'};
    color: #FABC46;
    margin-bottom: 12px;
`

const AddressText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.pos === 1 ? '1.1rem' : '1rem'};
    line-height: ${props => props.pos === 1 ? '21px' : '19px'};
    color: rgba(255, 255, 255, 0.87);
`

const CopyIcon = styled.img`
    margin-left: 8px;
    cursor: pointer;
    transition : all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition : all 0.5s ease-in-out;
    }
`

const WrappAddress = styled.div`
    display: flex;
`

const PosImg = styled.img`
    position: absolute;
    z-index: 2;
    height: 60%;
    width: auto;
    top: 20%;
    right: -30px;

    @media (max-width: 767px) {
        width: auto;
        height: 38%;
        right: -10px;
    }
`

const PosCard = ({pos}) => {
    const postText = useMemo(() => {
        if (pos === 1) return ['1', 'st']
        if (pos === 2) return ['2', 'nd']
        if (pos === 3) return ['3', 'rd']
    }, [pos])

    const srcPosCard = useMemo(() => {
        if (pos === 1) return `${process.env.PUBLIC_URL}/assets/images/pos1.png`
        if (pos === 2) return `${process.env.PUBLIC_URL}/assets/images/pos2.png`
        if (pos === 3) return `${process.env.PUBLIC_URL}/assets/images/pos3.png`
    }, [pos])

    return <WrapperPosCard>
        <LayerBack pos={pos} />
        <PosImg src={srcPosCard}/>
        <MainCard pos={pos}>
            <WrapperText>
                <WrappPostText>
                    <PosText pos={pos}>{postText[0]}</PosText><SmallPostText pos={pos}>{postText[1]}</SmallPostText>
                </WrappPostText>
                <Text pos={pos}>Trading volume</Text>
                <VolumeText pos={pos}>$15,000</VolumeText>
                <WrappAddress>
                    <AddressText pos={pos}>0xecg55EF0mog...963a</AddressText>
                    <CopyIcon src={`${process.env.PUBLIC_URL}/assets/images/copy-icon.png`} onClick={() => clickToCopy('0xecg55EF0mog...963a')}/>
                </WrappAddress>
            </WrapperText>
        </MainCard>
    </WrapperPosCard>
}

export default PosCard;