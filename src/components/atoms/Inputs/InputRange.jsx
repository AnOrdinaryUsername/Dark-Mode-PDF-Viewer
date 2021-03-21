import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { InputColumn } from './Input';

const Label = styled.label`
    font-size: 1.25em;
    font-weight: 400;
`;

const Row = styled.div`
    display: flex;
    align-items: center;

    & > span {
        font-weight: 500;
        margin-left: 1.6rem;
        width: 3ch;
    }
`;

const Input = styled.input.attrs(() => ({
    type: 'range',
}))`
    --thumbSize: 2.4rem;
    --trackSize: 1.6rem;
    --thumbBg: var(--button-bg-color);
    --trackBg: var(--button-font-color);
    --progressBg: var(--button-bg-color);
    /* webkit progress workaround */
    --webkitProgressPercent: 0%;
    --shadow: 0 0 2px 0 hsl(0deg 0% 7%);

    appearance: none;
    background-color: inherit;
    margin: 0;
    padding: 0;

    &:focus {
        outline: 2px auto red;
    }

    &::focus:not(:focus-visible) {
        outline: none;
    }

    /* Thumb (the thing you hold down/interact with) */
    &::-webkit-slider-thumb {
        appearance: none;
        width: var(--thumbSize);
        height: var(--thumbSize);
        background-color: var(--thumbBg);
        border-radius: calc(var(--thumbSize) / 2);
        border: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
        cursor: pointer;
    }

    &::-moz-range-thumb {
        appearance: none;
        width: var(--thumbSize);
        height: var(--thumbSize);
        background-color: var(--thumbBg);
        border-radius: calc(var(--thumbSize) / 2);
        border: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
        cursor: pointer;
    }

    &::-ms-thumb {
        appearance: none;
        width: var(--thumbSize);
        height: var(--thumbSize);
        background-color: var(--thumbBg);
        border-radius: calc(var(--thumbSize) / 2);
        border: none;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
        margin-top: calc(((var(--thumbSize) - var(--trackSize)) / 2) * -1);
        cursor: pointer;
    }

    /* Track (the entire line) */
    &::-webkit-slider-runnable-track {
        height: var(--trackSize);
        background-image: linear-gradient(
            90deg,
            var(--progressBg) var(--webkitProgressPercent),
            var(--trackBg) var(--webkitProgressPercent)
        );
        border-radius: calc(var(--trackSize) / 2);
        box-shadow: var(--shadow);
    }

    &::-moz-range-track {
        height: var(--trackSize);
        background-color: var(--trackBg);
        border-radius: calc(var(--trackSize) / 2);
        box-shadow: var(--shadow);
    }

    &::-ms-track {
        height: var(--trackSize);
        background-color: var(--trackBg);
        border-radius: calc(var(--trackSize) / 2);
        box-shadow: var(--shadow);
    }

    /* Progressbar (the line to the left of the thumb) */
    &::-moz-range-progress {
        height: var(--trackSize);
        background-color: var(--progressBg);
        border-radius: calc(var(--trackSize) / 2) 0 0 calc(var(--trackSize) / 2);
    }

    &::-ms-fill-lower {
        height: var(--trackSize);
        background-color: var(--progressBg);
        border-radius: calc(var(--trackSize) / 2) 0 0 calc(var(--trackSize) / 2);
    }
`;

const InputRange = ({ id, initialValue, max, min, step, ...props }) => {
    const [value, setValue] = useState(initialValue);

    const handleRangeSlider = (event) => {
        const { value } = event.target;
        setValue(value);
        props.callback(value);
    };

    useEffect(() => {
        const percent = ((value - min) / (max - min)) * 100;
        const input = document.getElementById(id);
        input.style.setProperty('--webkitProgressPercent', `${percent}%`);
    }, [value, min, max, id]);

    useEffect(() => {
        const percent = ((initialValue - min) / (max - min)) * 100;
        const input = document.getElementById(id);
        input.style.setProperty('--webkitProgressPercent', `${percent}%`);
        console.log('wowee');
    }, [initialValue, min, max, id]);

    console.log(props.initialValue);

    return (
        <InputColumn>
            <Label>{id}</Label>
            <Row>
                <Input
                    id={id}
                    name={id}
                    min={min}
                    max={max}
                    step={step}
                    value={initialValue}
                    onChange={handleRangeSlider}
                    {...props}
                ></Input>
                <span>{initialValue}</span>
            </Row>
        </InputColumn>
    );
};

export default InputRange;
