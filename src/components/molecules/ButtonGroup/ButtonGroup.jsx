import React, { Children } from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
    align-items: baseline;
    justify-content: center;
    font-size: 1.5em;

    & a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        line-height: normal;
    }

    & > * {
        padding: 0 1rem;
    }
`;

const ButtonGroup = ({ children }) => {
    const childrenCount = Children.count(children);
    return <GroupContainer count={childrenCount}>{children}</GroupContainer>;
};

export default ButtonGroup;
