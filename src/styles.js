import styled, { keyframes } from "styled-components";

export const MarginWrapper = styled.div`
    margin: 0 70px;
`

const fadeIn = keyframes`
    0% {opacity:0;}
    100% {opacity:1;}
`


const fadeInLeft = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-200px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`
const fadeInRight = keyframes`
    0% {
        opacity: 0;
        transform: translateX(200px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

const fadeInBottom = keyframes`
    0% {
        opacity: 0;
        transform: translateY(200px);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
`

export const FadeInDiv = styled.div`
    animation: ${fadeIn} 1.5s;
`

export const FadeInLeftDiv = styled.div`
    animation: ${fadeInLeft} 1.5s;
`

export const FadeInRightDiv = styled.div`
    animation: ${fadeInRight} 1.5s;
`

export const FadeInBottomDiv = styled.div`
    animation: ${fadeInBottom} 5s;
`