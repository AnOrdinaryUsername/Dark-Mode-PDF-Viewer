import React from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import styled from 'styled-components';
import SectionBox from './SectionBox';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Wrapper = styled.div`
    filter: ${({ hue, invert }) => `invert(${invert}) hue-rotate(${hue}deg)`};
`;

const Box = styled(SectionBox)`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    & > p {
        text-align: center;
    }

    @media (min-width: 768px) {
        border-left: 0;
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        max-width: 40rem;
    }
`;

const Heading = styled.h2`
    font-size: 2em;
    padding-bottom: 1.6rem;
`;

const PreviewPDF = ({ hue, invertValue, file }) => {
    return (
        <Box>
            <Heading>Preview</Heading>
            {!file && (
                <p>
                    Here's where you can preview your PDF! It updates as you tinker with the
                    settings.
                </p>
            )}
            <Wrapper hue={hue} invert={invertValue}>
                {file && (
                    <Document file={file}>
                        <Page height={300} width={300} pageNumber={1} />
                    </Document>
                )}
            </Wrapper>
        </Box>
    );
};

export default PreviewPDF;
