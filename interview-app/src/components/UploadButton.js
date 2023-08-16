import React from 'react';
import './UploadButton.css';

function UploadButton() {
    return (
        <div className="upload-button">
            <label htmlFor="pdf-upload">Upload Resume</label>
            <input type="file" id="pdf-upload" accept=".pdf" />
        </div>
    );
}

export default UploadButton;
