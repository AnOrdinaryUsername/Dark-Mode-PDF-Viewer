import React, { useRef, useState } from 'react';
import { HomePage, PDF } from '../components/pages';
import GlobalStyles from './GlobalStyles';

const App = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const pdf = useRef(null);
    let url = null;

    const submitPDF = () => {
        pdf.current = pdf.current.files[0];
        setIsSubmitted(true);
    };

    const goToHomePage = () => {
        setIsSubmitted(false);
    };

    if (isSubmitted) {
        const urlBlob = new Blob([pdf.current], { type: 'application/pdf' });
        url = URL.createObjectURL(urlBlob);
    }

    return (
        <>
            <GlobalStyles />
            {!isSubmitted && <HomePage onSubmit={submitPDF} inputRef={pdf} />}
            {isSubmitted && <PDF titleName={pdf.current.name} onClick={goToHomePage} src={url} />}
        </>
    );
};

export default App;
