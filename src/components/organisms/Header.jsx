import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useColorTheme } from '../../hooks';
import { Logo } from '../atoms';
import { HeaderButtons } from '../molecules';

const Header = () => {
    const [theme, setTheme] = useColorTheme();

    return (
        <header>
            <Logo>
                <FontAwesomeIcon icon={faFilePdf} />
                Dark Mode PDF
            </Logo>
            <HeaderButtons onClick={setTheme} theme={theme} />
        </header>
    );
};

export default Header;
