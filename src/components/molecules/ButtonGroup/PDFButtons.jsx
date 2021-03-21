import React from 'react';
import styled from 'styled-components';
import { Button, ThemeButton } from '../../atoms';

const ButtonWrapper = styled.div`
    position: fixed;
    top: 0;
    right: 15%;
    z-index: 3;
    display: flex;
    align-items: center;
    margin-top: 1.4rem;
    color: hsl(0, 0%, 100%);
`;

const PDFButtons = ({ onClick, clickTheme, theme }) => {
    return (
        <ButtonWrapper>
            <Button onClick={onClick}>Go Back</Button>
            <ThemeButton onClick={clickTheme} theme={theme} />
        </ButtonWrapper>
    );
};

export default PDFButtons;
