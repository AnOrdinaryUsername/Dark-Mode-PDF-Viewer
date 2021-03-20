import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Logo } from '../atoms';
import { HeaderButtons } from '../molecules';

const root = document.documentElement;

const initialTheme = (() => {
    // Initial color theme.
    let theme = 'dark';
    const storedTheme = localStorage.getItem('theme');
    const mediaQuery = window.matchMedia('(prefers-color-scheme: light)');

    if (storedTheme) {
        if (storedTheme === 'light') {
            theme = 'light';
        }
    } else if (mediaQuery.matches) {
        theme = 'light';
    }

    if (theme === 'light') {
        root.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        return false;
    }

    root.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
    return true;
})();

const Header = () => {
    const [theme, setTheme] = useState(initialTheme);

    const changeTheme = () => {
        setTheme(!theme);
    };

    useEffect(() => {
        const colorTheme = theme ? 'dark' : 'light';
        root.setAttribute('data-theme', colorTheme);
        localStorage.setItem('theme', colorTheme);
    }, [theme]);

    return (
        <header>
            <Logo>
                <FontAwesomeIcon icon={faFilePdf} />
                Dark Mode PDF
            </Logo>
            <HeaderButtons onClick={changeTheme} theme={theme} />
        </header>
    );
};

export default Header;
