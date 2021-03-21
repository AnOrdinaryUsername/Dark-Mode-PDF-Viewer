import React, { useState } from 'react';
import styled from 'styled-components';
import { PDFButtons } from '../molecules';

const Wrapper = styled.main`
    filter: ${({ hue, invert, isDarkTheme }) =>
        isDarkTheme ? `invert(${invert}) hue-rotate(${hue}deg)` : 'initial'};
`;

const IFrame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const PDF = ({ hue, invertValue, onClick, src, titleName }) => {
    const [theme, setTheme] = useState(true);

    const changeTheme = () => {
        setTheme(!theme);
    };

    return (
        <Wrapper isDarkTheme={theme} hue={hue} invert={invertValue}>
            <PDFButtons onClick={onClick} clickTheme={changeTheme} theme={theme} />
            <IFrame
                src={src}
                title={titleName}
                type="application/pdf"
                frameBorder="0"
                scrolling="auto"
                height="100%"
                width="100%"
            ></IFrame>
        </Wrapper>
    );
};

export default PDF;
