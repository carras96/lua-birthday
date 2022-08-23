import React from 'react';
import styled from 'styled-components';
import { useNavigate, useLocation } from "react-router-dom";

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

    &:hover {
        color: rgba(255, 255, 255, 0.87);

        &:after {
            content: '';
            position: absolute;
            height: 3px;
            width: 40%;
            background: #FABC46;
            border-radius: 10px;
            bottom: -10px;
            left: 0;
            display: block;
        }
    }

    &:after {
        content: '';
        position: absolute;
        height: 3px;
        width: 40%;
        background: #FABC46;
        border-radius: 10px;
        bottom: -10px;
        left: 0;
        display: ${props => props.isActive ? 'block' : 'none'};
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
    }

`

const MenuItemExtraLink = styled.a`
    font-style: normal;
    font-weight: 500;
    font-size: 1rem;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.6);
    cursor: pointer;
    text-decoration: none;
    position: relative;

    &:hover {
        color: rgba(255, 255, 255, 0.87);

        &:after {
            content: '';
            position: absolute;
            height: 3px;
            width: 40%;
            background: #FABC46;
            border-radius: 10px;
            bottom: -10px;
            left: 0;
            display: block;
        }
    }

    @media (max-width: 767px) {
        margin-bottom: 20px;
    }
`

const MENU_ITEMS = [
    {
        title: 'Home',
        path: '/',
    },
    {
        title: 'Trading Competition',
        path: '/trading-competition',
    },
    {
        title: 'Daily Hunt',
        path: '/daily-hunt',
    },
    {
        title: 'Gleam Mission',
        link: 'https://reactrouter.com/docs/en/v6/hooks/use-navigate',
    },
    {
        title: '$LUA Social Contest',
        link: 'https://reactrouter.com/docs/en/v6/hooks/use-navigate',
    },
];

const PageMenu = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const onNavigate = (path) => {
        navigate(path);
    }

    return <WrapperPageMenu>
        <Menu>
            {
                MENU_ITEMS.map(item => {
                    if (item.link) {
                        return <MenuItemExtraLink href={item.link} target='blank' key={item.title}>{item.title}</MenuItemExtraLink>
                    } else {
                        return <MenuItem onClick={() => onNavigate(item.path)} isActive={item.path === location.pathname} key={item.title}>{item.title}</MenuItem>
                    }
                })
            }
        </Menu>
    </WrapperPageMenu>
}

export default PageMenu;