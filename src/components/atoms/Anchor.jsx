import React from 'react';

const Anchor = ({ children, link, ...props }) => {
    return (
        <a target="_blank" rel="noopener noreferrer" href={link} {...props}>
            {children}
        </a>
    );
};

export default Anchor;
