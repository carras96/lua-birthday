import styled from 'styled-components';

export const WrapperContent = styled.div`
    width: 60%;
`

export const TextBold = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 24px;
    color: rgba(255, 255, 255, 0.87);
`

export const BoxText = styled.div`
    margin-bottom: 20px;
`

export const TextNormal = styled(TextBold)`
    font-weight: 400;
`
export const Flex = styled.div`
    display: flex;
`

export const InlineTextNormal = styled(TextNormal)`
    display: inline-block;
`

export const InlineTextBold = styled(TextBold)`
    display: inline-block;
`

export const TextHref = styled.a`
    cursor: pointer;
    color: #00D1AC;
`