import React from 'react';
import styled from 'styled-components';
import { useColorTheme } from '../../../hooks';
import { PDFButtons } from '../../molecules';
import DesktopPDF from './DesktopPDF';
import MobilePDF from './MobilePDF';

const Wrapper = styled.main`
    filter: ${({ hue, invert, isDarkTheme }) =>
        isDarkTheme ? `invert(${invert}) hue-rotate(${hue}deg)` : 'none'};
`;

const PDF = ({ hue, invertValue, onClick, src, titleName }) => {
    const [theme, setTheme] = useColorTheme();
    const isMobile = /mobi/i.test(navigator.userAgent);

    return (
        <Wrapper isDarkTheme={theme} hue={hue} invert={invertValue}>
            {isMobile && (
                <MobilePDF
                    component={<PDFButtons onClick={onClick} clickTheme={setTheme} theme={theme} />}
                    file={src}
                />
            )}
            {!isMobile && (
                <>
                    <PDFButtons onClick={onClick} clickTheme={setTheme} theme={theme} file={src} />
                    <DesktopPDF src={src} title={titleName} />
                </>
            )}
        </Wrapper>
    );
};

export default PDF;
