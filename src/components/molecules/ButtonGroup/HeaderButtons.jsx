import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Anchor, ThemeButton } from '../../atoms';
import ButtonGroup from './ButtonGroup';

const HeaderButtons = ({ onClick, theme }) => {
    return (
        <>
            <ButtonGroup>
                <Anchor
                    aria-label="View the source code repository"
                    link="https://github.com/AnOrdinaryUsername/Dark-Mode-PDF-Viewer"
                >
                    <FontAwesomeIcon icon={faGithub} />
                </Anchor>
                <ThemeButton theme={theme} onClick={onClick} />
            </ButtonGroup>
        </>
    );
};

export default HeaderButtons;
