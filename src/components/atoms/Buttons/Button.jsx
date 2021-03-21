import React from 'react';
import styled, { css } from 'styled-components';

export const primaryButton = css`
    background-color: var(--button-bg-color);
    color: var(--button-font-color);
`;

export const secondaryButton = css`
    border: 0.3rem solid var(--button-bg-color);
    background-color: inherit;
    color: var(--button-bg-color);
`;

export const tertiaryButton = css`
    background-color: inherit;
    color: inherit;
    text-decoration: underline;
    text-underline-offset: 0.4rem;
`;

const selectVariant = (variant) => {
    switch (variant) {
        case 'primary':
            return primaryButton;
        case 'secondary':
            return secondaryButton;
        case 'tertiary':
            return tertiaryButton;
        default:
            return tertiaryButton;
    }
};

export const smallButton = css`
    padding: 0.8rem 1.4rem;
`;

export const mediumButton = css`
    padding: 1.2rem 2.2rem;
`;

export const largeButton = css`
    padding: 1.8rem 3.2rem;
`;

const selectSize = (size) => {
    switch (size) {
        case 'small':
            return smallButton;
        case 'medium':
            return mediumButton;
        case 'large':
            return largeButton;
        default:
            return 'padding: inherit';
    }
};

export const defaultButtonStyles = css`
    border-radius: 0.8rem;
    font-weight: 700;
`;

const StyledButton = styled.button`
    ${({ variant }) => selectVariant(variant)}
    ${({ size }) => selectSize(size)}
    ${defaultButtonStyles}

    display: inline-flex;
    align-items: baseline;
    justify-content: center;
`;

const Button = ({ children, ...props }) => {
    return <StyledButton {...props}>{children}</StyledButton>;
};

export default Button;
