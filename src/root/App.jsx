import React, { useRef, useState } from 'react';
import { HomePage, PDF } from '../components/pages';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isFileUploaded, setIsFileUploaded] = useState(false);
    const [invertValue, setInvertValue] = useState(0.0);
    const [hue, setHue] = useState(0);
    const pdf = useRef(null);
    let urlBlob = null;
    let url = null;

    const grabFile = (event) => {
        pdf.current = event.target.files;
        setIsFileUploaded(true);
    };

    const resetFileUploadFlag = () => {
        setIsFileUploaded(false);
    };

    const handleHueValue = (value) => {
        setHue(value);
    };

    const handleInvertValue = (value) => {
        setInvertValue(value);
    };

    const submitPDF = (event) => {
        event.preventDefault();
        setIsSubmitted(true);
    };

    const switchToSuggested = (event) => {
        event.preventDefault();
        setInvertValue(0.8);
        setHue(180);
    };

    const goToHomePage = () => {
        setIsFileUploaded(false);
        setIsSubmitted(false);
    };

    if (isSubmitted || isFileUploaded) {
        urlBlob = new Blob([pdf.current[0]], { type: 'application/pdf' });
        url = window.URL.createObjectURL(urlBlob);
    }

    console.log('hue', hue);
    console.log('Invert ', invertValue);
    return (
        <>
            <GlobalStyles />
            {!isSubmitted && (
                <HomePage
                    file={url}
                    onChange={grabFile}
                    onFileReset={resetFileUploadFlag}
                    onSubmit={submitPDF}
                    invertValue={invertValue}
                    hue={hue}
                    handleInvertValue={handleInvertValue}
                    handleHueValue={handleHueValue}
                    switchToSuggested={switchToSuggested}
                    inputRef={pdf}
                />
            )}
            {isSubmitted && (
                <PDF
                    invertValue={invertValue}
                    hue={hue}
                    titleName={pdf.current[0].name}
                    onClick={goToHomePage}
                    src={url}
                />
            )}
        </>
    );
};

export default App;
