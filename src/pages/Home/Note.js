import React from 'react';
import styled from 'styled-components';

const WrapperNote = styled.div`
    margin-top: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;

    @media (max-width: 1000px) {
        margin-right: 30px;
        margin-left: 30px;
        text-align: center;
    }
`

const Text = styled.p`
    font-style: normal;
    font-weight: 300;
    font-size: 1.5rem;
    line-height: 32px;
    color: rgba(255, 255, 255, 0.87);
`

const NoteTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 1.5rem;
    line-height: 29px;
    text-align: center;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.87);
    margin-top: 40px;
`

const Note = () => {
    return <WrapperNote>
        <Text>We are grateful for the community's companionship & partners' support in the past 2 years!</Text>
        <Text>Words cannot describe your contribution to the LuaSwap community.</Text>
        <Text>Take this time to celebrate, and cheers for many exciting things to come!.</Text>
        <NoteTitle>THANK YOU!</NoteTitle>
    </WrapperNote>
}

export default Note;