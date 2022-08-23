import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreenItalic, Wrapper, WrapperInput } from './styles';

const SocialTasksModal = ({ toggleModal }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm({
        defaultValues: {
            name: sessionStorage.getItem('name'),
            accTw: sessionStorage.getItem('accTw'),
            linkTweet: sessionStorage.getItem('linkTweet'),
        },
    });

    const onSubmit = data => {
        sessionStorage.setItem('name', data.name);
        sessionStorage.setItem('accTw', data.accTw);
        sessionStorage.setItem('linkTweet', data.linkTweet);
        toggleModal();
    };

    return <Wrapper>
        <ModalTitle>Social tasks</ModalTitle>
        <ModalDesc>Quote tweet a random post on LuaSwap <TextGreenItalic href='http://twitter.com/LuaSwap' target='_blank'>(twitter.com/LuaSwap)</TextGreenItalic></ModalDesc>
        <form onSubmit={handleSubmit(onSubmit)}>
            <WrapperInput>
                <InputTitle>Full name</InputTitle>
                <InputModal placeholder='Your full name' {...register("name", { required: true })} />
            </WrapperInput>

            <WrapperInput>
                <InputTitle>Your Twitter account </InputTitle>
                <InputModal placeholder='@abc' {...register("accTw", { required: true })} />
            </WrapperInput>

            <WrapperInput>
                <InputTitle>Link to your Quote tweet</InputTitle>
                <InputModal placeholder='Your link' {...register("linkTweet", { required: true })} />
            </WrapperInput>


            <ButtonModal type="submit" disabled={errors.name || errors.accTw || errors.linkTweet}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
    </Wrapper>
}

export default SocialTasksModal;