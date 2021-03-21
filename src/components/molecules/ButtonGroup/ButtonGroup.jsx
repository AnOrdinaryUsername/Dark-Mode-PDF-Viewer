import React, { Children } from 'react';
import styled from 'styled-components';

const GroupContainer = styled.div`
    display: grid;
    grid-template-columns: ${({ count }) => `repeat(${count}, 1fr)`};
    align-items: baseline;
    justify-content: center;
    font-size: ${({ fontSize }) => fontSize || `1.5em`};

    & a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        width: 100%;
        line-height: normal;
    }
`;

const ButtonGroup = ({ children, className, fontSize }) => {
    const childrenCount = Children.count(children);
    return (
        <GroupContainer count={childrenCount} className={className} fontSize={fontSize}>
            {children}
        </GroupContainer>
    );
};

export default ButtonGroup;
