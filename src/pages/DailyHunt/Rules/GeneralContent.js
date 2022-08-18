import React from 'react';
import { BoxText, InlineTextBold, InlineTextNormal, TextNormal, WrapperContent } from './styles';

const GeneralContent = () => {
    return <WrapperContent>
        <BoxText>
            <TextNormal>There is a list of tasks every day. Users who complete sufficient tasks required on a day will have a chance to earn daily rewards.</TextNormal>
        </BoxText>
        <BoxText>
            <TextNormal>The daily tasks will be reset after 9AM UTC and exchanged for the latest ones (except for tasks assigned on social media).</TextNormal>
        </BoxText>
        <BoxText>
            <InlineTextNormal><InlineTextBold>Competition period:</InlineTextBold> 9AM UTC 22 Sep, 2022 - 9AM UTC 29 Sep, 2022</InlineTextNormal>
        </BoxText>
    </WrapperContent>
}

export default GeneralContent;