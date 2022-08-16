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
    margin: 0 70px;
    justify-content: center;
    align-items: center;
`

const CommunityCard = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 100px;
`

const Main = styled.div`
    position: relative;
`

const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
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
    [
        {
            src: '/assets/images/community/photo1.png'
        },
        {
            src: '/assets/images/community/photo5.png'
        },
    ],
    [
        {
            src: '/assets/images/community/photo2.png'
        },
        {
            src: '/assets/images/community/photo6.png'
        },
    ],
    [
        {
            src: '/assets/images/community/photo3.png'
        },
        {
            src: '/assets/images/community/photo7.png'
        },
    ],
    [
        {
            src: '/assets/images/community/photo4.png'
        },
        {
            src: '/assets/images/community/photo8.png'
        },
    ],
]

const Community = () => {
    return <WrapperCommunity>
        <CloudImage src='/assets/images/cloud.png'/>
        <Header>
            <Title>
                <TitleYellow>LuaSwap</TitleYellow> <TitleGreen>Community </TitleGreen>
            </Title>
        </Header>
        <CommunityCard>
            <BoxInfoCommunity title='Members' number='15K+' icon='/assets/images/members-icon.png'/>
            <BoxInfoCommunity title='Followers' number='36.5K+' icon='/assets/images/followers-icon.png'/>
        </CommunityCard>
        <Main>
            <Line />
            <Row>
            {
                LIST_COMMUNITY.map((col, index) => <Column colIndex={index}>
                    {
                        col.map(item => <WrappImage><Image src={item.src} /></WrappImage>)
                    }
                </Column>)
            }
            </Row>
        </Main>
    </WrapperCommunity>
}

export default Community;