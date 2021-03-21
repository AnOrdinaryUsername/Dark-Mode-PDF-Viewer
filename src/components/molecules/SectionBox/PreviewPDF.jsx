import React, { useEffect, useState } from 'react';
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

// Custom hook from https://usehooks.com/useWindowSize/
function useWindowSize() {
    // Initialize state with undefined width/height so server and client renders match
    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        // Handler to call on window resize
        function handleResize() {
            // Set window width/height to state
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        // Add event listener
        window.addEventListener('resize', handleResize);

        // Call handler right away so state gets updated with initial window size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener('resize', handleResize);
    }, []); // Empty array ensures that effect is only run on mount

    return windowSize;
}

const PreviewPDF = ({ hue, invertValue, file }) => {
    const size = useWindowSize();
    const mobilePortrait = size.width < 456;

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
                        <Page width={mobilePortrait ? 200 : 300} pageNumber={1} />
                    </Document>
                )}
            </Wrapper>
        </Box>
    );
};

export default PreviewPDF;
