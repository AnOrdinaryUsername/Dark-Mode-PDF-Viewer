import { faUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { defaultButtonStyles, mediumButton, secondaryButton } from '../Buttons/Button';
import { InputColumn } from './Input';

// Label simulates a button in this case since styling <input type="file" /> is hard.
const Label = styled.label`
    ${defaultButtonStyles}
    ${secondaryButton}
    ${mediumButton}
    box-shadow: 0.5rem 0.5rem var(--button-bg-color);
    transform: translate(0, 0);
    transition: transform 0.2s, box-shadow 0.2s cubic-bezier(0.4, 1.7, 0.7, 1);
    margin-top: 3.2rem;

    &:hover {
        transform: translate(0.5rem, 0.5rem);
        box-shadow: 0.5rem 0.5rem var(--button-font-color);
        transition: all 0.2s cubic-bezier(0.4, 1.7, 0.7, 1);
        cursor: pointer;
    }

    & > svg {
        margin-right: 1.4rem;
    }
`;

// Hide input visually but make it available for screen readers.
// https://www.a11yproject.com/posts/2013-01-11-how-to-hide-content/
const HiddenInput = styled.input`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
`;

const InputPDF = ({ inputRef, onChange, onFileReset }) => {
    const grabFileContents = (event) => {
        onChange(event);
    };

    const resetValue = (event) => {
        event.target.value = null;
        onFileReset();
    };

    return (
        <InputColumn>
            <Label htmlFor="pdf">
                <HiddenInput
                    ref={inputRef}
                    onChange={grabFileContents}
                    onClick={resetValue}
                    type="file"
                    id="pdf"
                    name="pdf"
                    accept=".pdf"
                    required
                ></HiddenInput>
                <FontAwesomeIcon icon={faUpload} />
                Upload PDF
            </Label>
        </InputColumn>
    );
};

export default InputPDF;
