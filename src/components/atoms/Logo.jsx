import styled from 'styled-components';

const Wrapper = styled.span`
    font-size: 1.5em;
    font-weight: 500;

    & > svg {
        margin-right: 1.4rem;
    }
`;

const Title = ({ children }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Title;
