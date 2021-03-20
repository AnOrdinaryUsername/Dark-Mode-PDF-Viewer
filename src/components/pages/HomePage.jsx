import React from 'react';
import styled from 'styled-components';
import { Button, InputPDF } from '../atoms';
import { Article, SectionBox } from '../molecules';
import { Header } from '../organisms';

const Form = styled.form`
    display: grid;
    place-items: center;
    row-gap: 3.2rem;
`;

const Box = styled(SectionBox)`
    margin-top: 1.6rem;

    & > * {
        margin-top: 1.6rem;
    }
`;

const HomePage = ({ inputRef, onSubmit }) => {
    return (
        <>
            <Header />
            <main>
                <Article title="Dark Mode PDF">
                    <Box title="Settings">
                        <Form onSubmit={onSubmit}>
                            <InputPDF inputRef={inputRef} />
                            <Button variant="primary" size="medium">
                                View PDF
                            </Button>
                        </Form>
                    </Box>
                </Article>
            </main>
        </>
    );
};

export default HomePage;
