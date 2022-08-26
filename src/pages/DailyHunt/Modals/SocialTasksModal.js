import React from 'react';
import { useForm } from 'react-hook-form';
import { ArrRight, ButtonModal, ErrorMessage, ErrorMessageBlank, InputModal, InputTitle, ModalDesc, ModalTitle, TextGreenItalic, Wrapper, WrapperInput } from './styles';

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
                {
                    errors.name ? <ErrorMessage>
                        {
                            errors.name.type === 'required' && '*Required field.'
                        }
                    </ErrorMessage> : <ErrorMessageBlank/>
                }
            </WrapperInput>

            <WrapperInput>
                <InputTitle>Your Twitter account </InputTitle>
                <InputModal placeholder='@abc' {...register("accTw", { required: true, pattern: /^@[A-Za-z0-9_]{4,15}$/ })} />
                {
                    errors.accTw ? <ErrorMessage>
                        {
                            errors.accTw.type === 'required' && '*Required field.'
                        }
                        {
                            errors.accTw.type === 'pattern' && '*Incorrect format.'
                        }
                    </ErrorMessage> : <ErrorMessageBlank/>
                }
            </WrapperInput>

            <WrapperInput>
                <InputTitle>Link to your Quote tweet</InputTitle>
                <InputModal placeholder='Your link' {...register("linkTweet", { required: true, pattern: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/ })} />
                {
                    errors.linkTweet ? <ErrorMessage>
                        {
                            errors.linkTweet.type === 'required' && '*Required field.'
                        }
                        {
                            errors.linkTweet.type === 'pattern' && '*Incorrect format.'
                        }
                    </ErrorMessage> : <ErrorMessageBlank/>
                }
            </WrapperInput>


            <ButtonModal type="submit" disabled={errors.name || errors.accTw || errors.linkTweet || !watch("name") || !watch("accTw") || !watch("linkTweet")}>Save <ArrRight src='assets/images/arr-right.png' /></ButtonModal>
        </form>
    </Wrapper>
}

export default SocialTasksModal;