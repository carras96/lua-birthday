import React, { useState } from 'react';
import styled from 'styled-components';

const WrapperAccordion = styled.div`
    padding: 24px 0 32px;
    border-top: 0.5px solid rgba(255, 255, 255, 0.37);
    z-index: 2;
`

const Header = styled.div`
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
`

const Main = styled.div`
    color: white;
    margin-top: ${props => props.isOpen ? '16px' : '0px'};
    transition: ${props => props.isOpen ? 'all 650ms cubic-bezier(0.080, 1.090, 0.320, 1.275)' : 'all .4s ease-in'};
    position: relative;
    height: ${props => props.isOpen ? 'auto' : '0'};
    z-index: 1;
`

const HeaderText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 2rem;
    line-height: 39px;
    color: rgba(255, 255, 255, 0.6);
`

const Icon = styled.img`
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
    transition: all 800ms cubic-bezier(0.080, 1.090, 0.320, 1.275);
`

const ChildrenWrapp = styled.div`
    visibility: ${props => props.isOpen ? 'visible' : 'hidden'};
    opacity: ${props => props.isOpen ? '1' : '0'};
    transition: ${props => props.isOpen ? 'all .5s ease-in' : 'all .2s ease-in'};
`

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const onToggle = () => {
        setIsOpen(!isOpen)
    }

    return <WrapperAccordion>
        <Header onClick={onToggle}>
            <HeaderText>{title}</HeaderText>
            <Icon src='assets/images/down-arrow.png' isOpen={isOpen} />
        </Header>
        {
            <Main isOpen={isOpen}>
                <ChildrenWrapp isOpen={isOpen}>
                    {children}
                </ChildrenWrapp>
            </Main>
        }
    </WrapperAccordion>
}

export default Accordion;
