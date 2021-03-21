import React from 'react';
import styled from 'styled-components';

const Container = styled.article`
    display: flex;
    align-items: center;
    flex-direction: column;
    flex: 1;
    padding-top: 0;
    padding-bottom: 3.2rem;
    padding-left: 3.2rem;
    padding-right: 3.2rem;

    @media (min-width: 576px) {
        padding-bottom: 6.4rem;
        padding-left: 6.4rem;
        padding-right: 6.4rem;
    }

    @media (min-width: 768px) {
        padding-bottom: 4.8rem;
        padding-left: 4.8rem;
        padding-right: 4.8rem;
    }
`;

const StyledTitle = styled.h1`
    display: inline;
    margin: 0 auto;
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
