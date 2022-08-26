import React from 'react';
import { useForm } from 'react-hook-form';
import { AnswerQuiz, ArrRight, ButtonModal, ModalTitle, QuestionQuiz, QuestionQuizBold, RadioButton, WrappAnswer, Wrapper } from './styles';

const FAKE_ANSWER = [
    {
        option: 'A',
        answer: 'Serum (SRM)'
    },
    {
        option: 'B',
        answer: 'FTX (FTT)'
    },
    {
        option: 'C',
        answer: 'Avalanche (Avax)'
    }
]

const DailyQuizModal = ({ toggleModal }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: { quiz: sessionStorage.getItem('quiz') },
    });

    const onSubmit = data => {
        sessionStorage.setItem('quiz', data.quiz);
        toggleModal();
    };

    return <Wrapper>
        <ModalTitle>Daily quiz</ModalTitle>
        <br />
        <form onSubmit={handleSubmit(onSubmit)}>
            <QuestionQuiz><QuestionQuizBold>Q1:</QuestionQuizBold> Which one is NOT a token listed on LuaSwap?</QuestionQuiz>
            <br />
            {
                FAKE_ANSWER.map((answer, index) => <WrappAnswer key={index}>
                    <RadioButton type="radio" id={index} {...register("quiz", { required: true })} value={answer.option} />
                    <AnswerQuiz for={index}>
                        <QuestionQuizBold>{answer.option}.</QuestionQuizBold> {answer.answer}
                    </AnswerQuiz>
                </WrappAnswer>)
            }
            <ButtonModal type="submit" disabled={errors.quiz || !watch("quiz")}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
    </Wrapper>
}

export default DailyQuizModal;