import React from 'react';
import styled from 'styled-components';

const WrapperLaunchpad = styled.div`
    position: relative;
    padding-bottom: 100px;
`

const Title = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 3rem;
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

    @media (max-width: 767px) {
        margin: 0 0 100px;
        text-align: center;
    }
`

const Main = styled.div`
    position: relative;
`

const Row = styled.div`
    // display: grid;
    // grid-template-columns: repeat(7, 1fr);
    // justify-content: space-between;
    // align-items: center;

    display: flex;
    justify-content: center;
    flex-flow: wrap;

    @media (max-width: 1400px) {
        display: flex;
        justify-content: center;
        flex-flow: wrap;
    }
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
    // transform: skewX(20deg);
    height: ${props => props.height}px;
    width: auto;
`

const WrappImage = styled.div`
    width: 15%;
    min-width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: center;

    // background-image: url(${props => props.src});
    // background-size: contain;
    // background-repeat: no-repeat;

    // transition : all 0.5s ease-in-out;

    // &:hover {
    //     transform: scale(1.5);
    //     transition : all 0.5s ease-in-out;
    // }
`

const Column = styled.div`
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(#ffffff, #040406);
    border-top: none;
    border-bottom: none;
    border-left: ${props => props.colIndex > 0 && props.colIndex < 7 ? 'none' : 'auto'};
    // transform: skewX(-20deg);
`

const GradiantText = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 4rem;
    line-height: 78px;
    text-transform: uppercase;

    background: linear-gradient(180deg, rgba(85, 85, 85, 0.4) 22.88%, rgba(20, 20, 20, 0) 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: -40px;

    @media (max-width: 767px) {
        font-size: 3rem;
        line-height: 54px;
        margin-bottom: -20px;
    }
`

const RocketImage = styled.img`
    position: absolute;
    top: 120px;
    left: 0;
`

const LIST_LAUNCHPAD = [
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/TomoMasterDAO.png`,
            height: 40
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/hwl.png`,
            height: 64
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/p.png`,
            height: 48
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/dragonkart.png`,
            height: 64
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/b.png`,
            height: 36
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/widi.png`,
            height: 40
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/lunarush.png`,
            height: 60
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/infinityarena.png`,
            height: 52
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/mollector.png`,
            height: 100
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/starbot.png`,
            height: 36
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/galaxyblizt.png`,
            height: 34
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/dark.png`,
            height: 64
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/zoa.png`,
            height: 40
        },
        {
            src: `${process.env.PUBLIC_URL}/assets/images/launchpad/animverse.png`,
            height: 64
        }
]

const Launchpad = () => {
    return <WrapperLaunchpad>
        <RocketImage src={`${process.env.PUBLIC_URL}/assets/images/rocket-launchpad.png`}/>
        <Header>
            <GradiantText>LuaStarter Launchpad</GradiantText>
            <Title>
                <TitleYellow>LuaStarter</TitleYellow> <TitleGreen>Launchpad</TitleGreen>
            </Title>
        </Header>
        <Main>
            {/* <Line /> */}
            <Row>
            {
                LIST_LAUNCHPAD.map((item, index) => <WrappImage key={item.src} src={item.src}>
                    <Image src={item.src} height={item.height}/>
                </WrappImage>)
            }
            </Row>
        </Main>
    </WrapperLaunchpad>
}

export default Launchpad;