import React from 'react';
import styled from 'styled-components';
import { SettingButtons } from '../';
import { InputPDF, InputRange } from '../../atoms';
import SectionBox from './SectionBox';

const Form = styled.form`
    display: grid;
    place-items: center;
    row-gap: 1.6rem;
    width: 100%;
`;

const Box = styled(SectionBox)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > *:not(:first-child) {
        margin-top: 1.6rem;
    }

    @media (min-width: 768px) {
        border-right: 0.3rem solid var(--button-bg-color);
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        max-width: 50%;
    }

    @media (min-width: 992px) {
        max-width: 50rem;
    }
`;

const Settings = ({
    handleHueValue,
    handleInvertValue,
    hue,
    invertValue,
    onSubmit,
    switchToSuggested,
    ...props
}) => {
    return (
        <Box title="Settings">
            <Form onSubmit={onSubmit}>
                <InputRange
                    callback={handleInvertValue}
                    id="Invert"
                    min={0.0}
                    max={1.0}
                    step={0.1}
                    initialValue={invertValue}
                />
                <InputRange
                    callback={handleHueValue}
                    id="Hue"
                    min={0}
                    max={360}
                    step={60}
                    initialValue={hue}
                />
                <InputPDF {...props} />
                <SettingButtons switchToSuggested={switchToSuggested} />
            </Form>
        </Box>
    );
};

export default Settings;
