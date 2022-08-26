import React from 'react';
import styled from 'styled-components';
import { clickToCopy } from '../../../utils/clickToCopy';

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

const Header = styled.div`
    width: 100%;
    display: flex;
    padding-bottom: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.37);
    height: 30px;
`

const Main = styled.div`
    width: 100%;
    height: calc(100% - 40px - 46px);
    overflow-y: auto;

    &::-webkit-scrollbar-track
    {
        -webkit-box-shadow: inset 0 0 6px #040406;
        background-color: #040406;
    }
    
    &::-webkit-scrollbar
    {
        width: 6px;
        background-color: #040406;
    }
    
    &::-webkit-scrollbar-thumb
    {
        background-color: rgba(255, 255, 255, 0.37);
        border-radius: 4px;
    }
`

const Row = styled.div`
    width: 100%;
    display: flex;
    padding: 16px 0;
`

const HeaderText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.37);
`

const RowText = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 1rem;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.87);
`

const Col1 = styled.div`
    width: 25%;
`

const Col2 = styled.div`
    width: 50%;
    display: flex;
`

const Col3 = styled.div`
    width: 25%;
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

const TitleModal = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 16px;
`

const FAKE_DATA = [
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },
    {
        address: '0xecg55EF0mog...963a',
        date: '22 Aug, 2022',
        reward: '5,546.32 LUA'
    },

]


const ResultModal = ({ toggleModal }) => {
    return <Wrapper>
        <TitleModal>Winner list</TitleModal>
        <Header>
            <Col1><HeaderText>Date</HeaderText></Col1>
            <Col2><HeaderText>Wallet Address</HeaderText></Col2>
            <Col3><HeaderText>Rewards</HeaderText></Col3>
        </Header>
        <Main>
            {
                FAKE_DATA.map((data, index) => <Row key={index}>
                    <Col1><RowText>{data.date}</RowText></Col1>
                    <Col2><RowText>{data.address}</RowText> <CopyIcon src={`${process.env.PUBLIC_URL}/assets/images/copy-icon.png`} onClick={() => clickToCopy(data.address)} /></Col2>
                    <Col3><RowText>{data.reward}</RowText></Col3>
                </Row>)
            }
        </Main>
    </Wrapper>
}

export default ResultModal;