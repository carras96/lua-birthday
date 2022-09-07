import React from 'react';
import { useForm } from 'react-hook-form';
import { AnswerQuiz, ArrRight, ButtonModal, ModalTitle, QuestionQuiz, QuestionQuizBold, RadioButton, WrappAnswer, Wrapper } from './styles';

const DailyQuizModal = ({ toggleModal, dailyQuestion }) => {

    const {A, B, C, question, questionId} = dailyQuestion

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
            <QuestionQuiz><QuestionQuizBold>Q{questionId}:</QuestionQuizBold> {question}</QuestionQuiz>
            <br />
            <WrappAnswer>
                <RadioButton type="radio" id={'A'} {...register("quiz", { required: true })} value={'A'} />
                <AnswerQuiz for={'A'}>
                    <QuestionQuizBold>A.</QuestionQuizBold> {A}
                </AnswerQuiz>
            </WrappAnswer>
            <WrappAnswer>
                <RadioButton type="radio" id={'B'} {...register("quiz", { required: true })} value={'B'} />
                <AnswerQuiz for={'B'}>
                    <QuestionQuizBold>B.</QuestionQuizBold> {B}
                </AnswerQuiz>
            </WrappAnswer>
            <WrappAnswer>
                <RadioButton type="radio" id={'C'} {...register("quiz", { required: true })} value={'C'} />
                <AnswerQuiz for={'C'}>
                    <QuestionQuizBold>C.</QuestionQuizBold> {C}
                </AnswerQuiz>
            </WrappAnswer>
            <ButtonModal type="submit" disabled={errors.quiz || !watch("quiz")}>Save <ArrRight src={`${process.env.PUBLIC_URL}/assets/images/arr-right.png`} /></ButtonModal>
        </form>
    </Wrapper>
}

export default DailyQuizModal;