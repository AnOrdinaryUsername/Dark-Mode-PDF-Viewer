import styled from 'styled-components';

const IFrame = styled.iframe`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
`;

const DesktopPDF = ({ src, titleName }) => {
    return (
        <IFrame
            src={src}
            title={titleName}
            type="application/pdf"
            frameBorder="0"
            scrolling="auto"
            height="100%"
            width="100%"
        ></IFrame>
    );
};

export default DesktopPDF;
