import React, { useMemo } from 'react';
import styled from 'styled-components';

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
    background-image: url('/assets/images/bg-pos-card.png');
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
    font-size: ${props => props.pos === 1 ? '96px' : '64px'};
    line-height: ${props => props.pos === 1 ? '117px' : '78px'};
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 12px;
`

const Text = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.pos === 1 ? '14px' : '12px'};
    line-height: ${props => props.pos === 1 ? '17px' : '14px'};
    color: rgba(255, 255, 255, 0.37);
`

const VolumeText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: ${props => props.pos === 1 ? '48px' : '24px'};
    line-height: ${props => props.pos === 1 ? '59px' : '29px'};
    color: #FABC46;
    margin-bottom: 12px;
`

const AddressText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: ${props => props.pos === 1 ? '18px' : '16px'};
    line-height: ${props => props.pos === 1 ? '21px' : '19px'};
    color: rgba(255, 255, 255, 0.87);
`

const CopyIcon = styled.img`
    margin-left: 8px;
    cursor: pointer;
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
`

const PosCard = ({pos}) => {
    const postText = useMemo(() => {
        if (pos === 1) return '1st'
        if (pos === 2) return '2nd'
        if (pos === 3) return '3rd'
    }, [pos])

    const srcPosCard = useMemo(() => {
        if (pos === 1) return '/assets/images/pos1.png'
        if (pos === 2) return '/assets/images/pos2.png'
        if (pos === 3) return '/assets/images/pos3.png'
    }, [pos])

    return <WrapperPosCard>
        <LayerBack pos={pos} />
        <PosImg src={srcPosCard}/>
        <MainCard pos={pos}>
            <WrapperText>
                <PosText pos={pos}>{postText}</PosText>
                <Text pos={pos}>Trading volume</Text>
                <VolumeText pos={pos}>$15,000</VolumeText>
                <WrappAddress>
                    <AddressText pos={pos}>0xecg55EF0mog...963a</AddressText>
                    <CopyIcon src='/assets/images/copy-icon.png'/>
                </WrappAddress>
            </WrapperText>
        </MainCard>
    </WrapperPosCard>
}

export default PosCard;