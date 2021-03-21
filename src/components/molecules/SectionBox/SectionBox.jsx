import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
    border: 0.3rem solid var(--button-bg-color);
    border-radius: 1.6rem;
    padding: 3.2rem;
`;

const Heading = styled.h2`
    font-size: 2em;
`;

const SectionBox = ({ children, className, title }) => {
    return (
        <Section className={className}>
            {title !== undefined && <Heading>{title}</Heading>}
            {children}
        </Section>
    );
};

export default SectionBox;
