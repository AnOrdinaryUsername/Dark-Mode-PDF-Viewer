import React from 'react';
import styled from 'styled-components';
import { Button } from '../../atoms';
import ButtonGroup from './ButtonGroup';

const SettingGroup = styled(ButtonGroup)`
    grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
    align-items: center;
    row-gap: 1.6rem;
    margin-top: 7.2rem;

    @media (min-width: 576px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const SettingButtons = ({ switchToSuggested }) => {
    return (
        <SettingGroup fontSize="inherit">
            <Button variant="primary" size="medium" type="submit">
                View PDF
            </Button>
            <Button variant="tertiary" size="medium" onClick={switchToSuggested}>
                Suggested Options
            </Button>
        </SettingGroup>
    );
};

export default SettingButtons;
