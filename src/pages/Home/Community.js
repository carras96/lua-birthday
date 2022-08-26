import React from 'react';
import styled from 'styled-components';
import BoxInfoCommunity from '../../components/BoxInfoCommunity';

const WrapperCommunity = styled.div`
    padding-top: 350px;
    position: relative;
    
`

const CloudImage = styled.img`
    position: absolute;
    top: 100px;
    left: 0;
    width: 70%;
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
    margin: 0 70px;
    justify-content: center;
    align-items: center;

    @media (max-width: 767px) {
        margin: 0;
        text-align: center;
    }
`

const CommunityCard = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 100px;

    @media (max-width: 767px) {
       flex-direction: column;
       align-items: center;
    }
`

const Main = styled.div`
    position: relative;
`

const Row = styled.div`
    // display: grid;
    // grid-template-columns: repeat(4, 1fr);
    // justify-content: space-between;
    // align-items: center;

    display: flex;
    justify-content: center;
    flex-flow: wrap;
`

const Line = styled.div`
    width: calc(100% + 500px);
    height: 2px;
    border-bottom: 2px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(#636364, #040406);
    position: absolute;
    top: 212px;
    // bottom: 0;
    // left: 0;
    // right: 0;
    transform: translateX(-250px);
`

const Image = styled.img`
    width: 100%;
    height: 100%;
`

const WrappImage = styled.div`
    // width: 100%;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 16px;

    transition : all 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
        transition : all 0.5s ease-in-out;
    }
`

const Column = styled.div`
    border: 1px solid;
    border-image-slice: 1;
    border-image-source: radial-gradient(#ffffff, #040406);
    border-top: none;
    border-bottom: none;
    border-left: ${props => props.colIndex > 0 && props.colIndex < 4 ? 'none' : 'auto'};
`

const LIST_COMMUNITY = [
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo1.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo5.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo2.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo6.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo3.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo7.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo4.png`
    },
    {
        src: `${process.env.PUBLIC_URL}/assets/images/community/photo8.png`
    },
]

const Community = () => {
    return <WrapperCommunity>
        <CloudImage src={`${process.env.PUBLIC_URL}/assets/images/cloud.png`} />
        <Header>
            <Title>
                <TitleYellow>LuaSwap</TitleYellow> <TitleGreen>Community </TitleGreen>
            </Title>
        </Header>
        <CommunityCard>
            <BoxInfoCommunity title='Members' number='15K+' icon={`${process.env.PUBLIC_URL}/assets/images/members-icon.png`}
                iconHover={`${process.env.PUBLIC_URL}/assets/images/members-icon-hover.png`} />
            <BoxInfoCommunity title='Followers' number='~37K+' icon={`${process.env.PUBLIC_URL}/assets/images/followers-icon.png`}
                iconHover={`${process.env.PUBLIC_URL}/assets/images/followers-icon-hover.png`} />
        </CommunityCard>
        <Main>
            <Row>
                {
                    LIST_COMMUNITY.map((item, index) => <WrappImage key={item.src}><Image src={item.src} /></WrappImage>)
                }
            </Row>
        </Main>
    </WrapperCommunity>
}

export default Community;