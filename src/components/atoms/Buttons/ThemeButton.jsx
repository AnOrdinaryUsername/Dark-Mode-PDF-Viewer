import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Button from './Button';

const ThemeButton = ({ onClick, theme }) => {
    return (
        <Button
            aria-label={theme ? 'Activate light theme' : 'Activate dark theme'}
            onClick={onClick}
        >
            <FontAwesomeIcon icon={theme ? faMoon : faSun} />
        </Button>
    );
};

export default ThemeButton;
