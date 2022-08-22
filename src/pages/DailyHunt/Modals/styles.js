import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 100%;
    height: 100%;
`

export const ModalTitle = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 8px;
`

export const ModalDesc = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 32px;
`

export const InputTitle = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.87);
    margin-bottom: 8px;
`

export const TitleGuide = styled.p`
    font-style: normal;
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.6);
    margin-top: 32px;
    margin-bottom: 8px;
`

export const TextGuide = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: rgba(255, 255, 255, 0.6);
`

export const TextGreen = styled.a`
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #00D1AC;
`

export const TextGreenItalic = styled(TextGreen)`
    font-style: italic;
`

export const InputModal = styled.input`
    width: calc(100% - 16px);
    height: 36px;
    background: #1A191E;
    border-radius: 5px;
    padding-left: 16px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: rgba(255, 255, 255, 0.37);
    border: none;
    outline: none;
`

export const ButtonModal = styled.button`
    padding: 8px 16px;
    background: #FFFFFF;
    margin-top: 16px;

    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #1A191E;
    border-radius: 5px;
    border: none;

    cursor: pointer;

    &:hover {
        background: #FABC46;
    }

    &:disabled {
        background: rgba(255, 255, 255, 0.37);
    }
`

export const GuideDetail = styled.div`
    padding: 0 5px;
`

export const ArrRight = styled.img``

export const WrapperInput = styled.div`
    margin-bottom: 24px;
`

export const QuestionQuiz = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
`

export const QuestionQuizBold = styled(QuestionQuiz)`
    font-weight: 700;
    display: inline-block;
`

export const RadioButton = styled.input`
    display: none;

    &:checked + label::after {
        position: absolute;
        content: '';
        top: 8px;
        left: 6px;
        width: 8px;
        height: 8px;
        background: #FABC46;;
        border-radius: 100%;
    }
`



export const AnswerQuiz = styled.label`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: rgba(255, 255, 255, 0.87);
    padding-left: 30px;

    position: relative;

    &::before {
        position: absolute;
        content: '';
        top: 50%;
        left: 0;
        width: 18px;
        height: 18px;
        margin-top: -8px;
        background: #040406;
        border: 1px solid rgba(255, 255, 255, 0.87);
        border-radius: 100%;
    }
`

export const WrappAnswer = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 24px;
`