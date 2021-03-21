import React from 'react';
import styled from 'styled-components';
import { Article, PreviewPDF, Settings } from '../molecules';
import { Header } from '../organisms';

const Row = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column-reverse;
    margin-top: 3.2rem;
    width: 100%;

    & > * {
        min-height: 100%;
        height: 55rem;
    }

    & > *:nth-child(2) {
        margin-bottom: 3.2rem;
    }

    @media (min-width: 768px) {
        flex-direction: row;
    }
`;

const HomePage = ({ file, ...props }) => {
    return (
        <>
            <Header />
            <main>
                <Article title="Dark Mode PDF">
                    <Row>
                        <Settings {...props} />
                        <PreviewPDF {...props} file={file} />
                    </Row>
                </Article>
            </main>
        </>
    );
};

export default HomePage;
