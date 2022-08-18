import React from 'react';
import styled from 'styled-components';

const WrapperLaunchpad = styled.div`
    margin-top: 300px;
    position: relative;
    padding-bottom: 100px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 48px;
    line-height: 59px;
`

const TitleGreen = styled.span`
    color: #37CD95;
`

const TitleYellow = styled.span`
    color: #FABC46;
`

const Header = styled.div`
    display: flex;
    margin: 0 15% 150px;
    padding-top: 40px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Main = styled.div`
    position: relative;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    // justify-content: space-between;
    // align-items: center;
`

const Line = styled.div`
    width: calc(100% + 500px);
    height: 2px;
    border-bottom: 2px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(#636364, #040406);
    position: absolute;
    top: 150px;
    // bottom: 0;
    // left: 0;
    // right: 0;
    transform: translateX(-250px);
`

const Image = styled.img`
    transform: skewX(20deg);
`

const WrappImage = styled.div`
    width: 100%;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Column = styled.div`
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(#ffffff, #040406);
    border-top: none;
    border-bottom: none;
    border-left: ${props => props.colIndex > 0 && props.colIndex < 7 ? 'none' : 'auto'};
    transform: skewX(-20deg);
`

const GradiantText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 64px;
    line-height: 78px;
    text-transform: uppercase;

    background: linear-gradient(180deg, rgba(85, 85, 85, 0.4) 22.88%, rgba(20, 20, 20, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: -40px;
`

const LIST_LAUNCHPAD = [
    [
        {
            src: '/assets/images/launchpad/TomoMasterDAO.png'
        },
        {
            src: '/assets/images/launchpad/hwl.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/p.png'
        },
        {
            src: '/assets/images/launchpad/dragonkart.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/b.png'
        },
        {
            src: '/assets/images/launchpad/widi.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/lunacrush.png'
        },
        {
            src: '/assets/images/launchpad/infinityarena.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/mollector.png'
        },
        {
            src: '/assets/images/launchpad/starbot.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/galaxyblizt.png'
        },
        {
            src: '/assets/images/launchpad/dark.png'
        },
    ],
    [
        {
            src: '/assets/images/launchpad/zoa.png'
        },
        {
            src: '/assets/images/launchpad/animverse.png'
        }
    ]
]

const Launchpad = () => {
    return <WrapperLaunchpad>
        <Header>
            <GradiantText>LuaStarter Launchpad</GradiantText>
            <Title>
                <TitleYellow>LuaStarter</TitleYellow> <TitleGreen>Launchpad</TitleGreen>
            </Title>
        </Header>
        <Main>
            <Line />
            <Row>
            {
                LIST_LAUNCHPAD.map((col, index) => <Column colIndex={index}>
                    {
                        col.map(item => <WrappImage><Image src={item.src} /></WrappImage>)
                    }
                </Column>)
            }
            </Row>
        </Main>
    </WrapperLaunchpad>
}

export default Launchpad;