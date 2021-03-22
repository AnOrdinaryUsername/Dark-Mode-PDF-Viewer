import { useState } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import styled from 'styled-components';
import { useWindowSize } from '../../../hooks';
import { Button } from '../../atoms';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const Options = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 3.2rem;
    background-color: white;
    color: black;
    border-top: 0.3rem solid var(--button-bg-color);

    & > div {
        position: static;
        background-color: white;
        color: black;
        font-size: 1.5em;

        div:first-child {
            margin-right: 1.6rem;
        }
    }

    & > p {
        margin-bottom: 1.6rem;
    }
`;

const Wrapper = styled.div`
    display: flex;

    & > *:first-child {
        margin-right: 1.6rem;
    }
`;

const MobilePDF = ({ component, file }) => {
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const size = useWindowSize();

    const onDocumentLoadSuccess = ({ numPages }) => {
        setNumPages(numPages);
        setPageNumber(1);
    };

    const changePage = (offset) => {
        setPageNumber((prevPageNumber) => prevPageNumber + offset);
    };

    const previousPage = () => {
        changePage(-1);
    };

    const nextPage = () => {
        changePage(1);
    };

    return (
        <>
            <Document
                className="pdf"
                file={file}
                renderMode="svg"
                onLoadSuccess={onDocumentLoadSuccess}
            >
                <Page width={size.width} pageNumber={pageNumber} />
            </Document>
            <Options>
                <p>
                    Page {pageNumber || (numPages ? 1 : '--')} of {numPages || '--'}
                </p>
                <Wrapper>
                    <Button
                        variant="primary"
                        size="medium"
                        disabled={pageNumber <= 1}
                        onClick={previousPage}
                    >
                        Previous
                    </Button>
                    <Button
                        variant="primary"
                        size="medium"
                        disabled={pageNumber >= numPages}
                        onClick={nextPage}
                    >
                        Next
                    </Button>
                </Wrapper>
                {component}
            </Options>
        </>
    );
};

export default MobilePDF;
