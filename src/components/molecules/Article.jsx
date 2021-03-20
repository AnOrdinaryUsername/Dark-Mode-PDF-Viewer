import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
`;

const StyledTitle = styled.h1`
    padding: 1.2rem;
    font-size: 2.5em;

    background-image: linear-gradient(
        transparent 0,
        transparent 55%,
        var(--underline) 55%,
        var(--underline) 90%,
        transparent 90%,
        transparent 100%
    );
    background-repeat: no-repeat;
    display: inline;

    @media (min-width: 576px) {
        margin-left: 2.4rem;
        margin-right: auto;
    }
`;

const Article = ({ children, title }) => {
    return (
        <Container>
            <StyledTitle>{title}</StyledTitle>
            {children}
        </Container>
    );
};

export default Article;
