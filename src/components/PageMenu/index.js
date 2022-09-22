import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";
import { useApi } from '../../hooks/useApi';

const WrapperPageMenu = styled.div`
    width: 100%;
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Menu = styled.div`
    background: #1A191E;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 28px;
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 18px 40px;
    
    @media (max-width: 1000px) {
        width: 90%;
    }

    @media (max-width: 767px) {
        flex-direction: column;
    }
`

const MenuItem = styled.span`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: ${props => props.isActive ? 'rgba(255, 255, 255, 0.87)' : 'rgba(255, 255, 255, 0.6)'};
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease-in-out;

    &:hover {
        color: rgba(255, 255, 255, 0.87);
        transition: all 0.3s ease-in-out;
        &:after {
            transition: all 0.3s ease-in-out;
            opacity: 1;
        }
    }

    &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 40px;
        background: #FABC46;
        border-radius: 10px;
        bottom: -10px;
        left: 0;
        opacity: ${props => props.isActive ? '1' : '0'};
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
    }

`

const MENU_ITEMS = [
    {
        id: 'home',
        title: 'Home',
        path: '/',
        isDisable: false,
        isOpenExtraLink: false
    },
    {
        id: 'tradingCompetition',
        title: 'Trading Competition',
        path: '/trading-competition',
        isDisable: true,
        isOpenExtraLink: false
    },
    {
        id: 'dailyHunt',
        title: 'Treasure Hunt',
        path: '/treasure-hunt',
        isDisable: true,
        isOpenExtraLink: false
    },
    {
        id: 'gleamMission',
        title: 'Gleam Mission',
        path: 'https://gleam.io/Ltd56/luaturns2-birthday-airdrop',
        isDisable: false,
        isOpenExtraLink: true
    },
    {
        id: 'socialContest',
        title: '$LUA Social Contest',
        path: 'https://twitter.com/LuaSwap/status/1569323588028874752',
        isDisable: false,
        isOpenExtraLink: true
    },
];

const PageMenu = () => {
    const [cardsData, setCardsData] = useState(MENU_ITEMS)

    const { getEventConfig } = useApi()

    useEffect(() => {
        const fetchEventConfig = async () => {
            const {data = {}} = await getEventConfig();
            let tempData = [...cardsData];
            Object.keys(data).forEach(key => {
                const card = tempData.find(item => item.id === key)
                if (card) {
                    card.isDisable = !data[key]
                    // card.isDisable = false
                }
            })
            setCardsData(tempData)
        }
        fetchEventConfig()
    }, [])

    const navigate = useNavigate();
    const location = useLocation();
    const onNavigate = (path, isDisable, isOpenExtraLink) => {
        if (isDisable) {
            return;
        }
        if (isOpenExtraLink) {
            window.open(path, '_blank', 'noopener,noreferrer');
        } else {
            navigate(path);
        }
    }

    return <WrapperPageMenu>
        <Menu>
            {
                MENU_ITEMS.map(item => {
                    return <MenuItem onClick={() => onNavigate(item.path, item.isDisable, item.isOpenExtraLink)} isActive={item.path === location.pathname} key={item.title}>{item.title}</MenuItem>
                })
            }
        </Menu>
    </WrapperPageMenu>
}

export default PageMenu;