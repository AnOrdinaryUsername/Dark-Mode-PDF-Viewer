import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import { Anchor, ThemeButton } from '../../atoms';
import ButtonGroup from './ButtonGroup';

const HeaderGroup = styled(ButtonGroup)`
    & > * {
        padding: 0 1rem;
    }
`;

const HeaderButtons = ({ onClick, theme }) => {
    return (
        <HeaderGroup>
            <Anchor
                aria-label="View the source code repository"
                link="https://github.com/AnOrdinaryUsername/Dark-Mode-PDF-Viewer"
            >
                <FontAwesomeIcon icon={faGithub} />
            </Anchor>
            <ThemeButton theme={theme} onClick={onClick} />
        </HeaderGroup>
    );
};

export default HeaderButtons;
