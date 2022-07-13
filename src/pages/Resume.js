import React from 'react';
import {Document, Page, pdfjs} from "react-pdf";

const Resume = () => {
    return (
        <div>
            <Document file="cv.pdf" className="d-flex justify-content-center">
                <page pageNumber={1} />
            </Document>
        </div>
    )
}

export default Resume