import EduExp from "./EduExp";
import { useState } from "react";

export default function EduExpSection({ cvData, setCvData }) {
    const eduClickHandler = () => {
        setCvData((prev) => ({
            ...prev,
            education: [...prev.education, {}],
        }));
    };

    return (
        <div className="edu-exp form-section">
            <h2>Education Information</h2>
            {cvData.education.map((eduItem, id) => (
                <div key={eduItem.id || id}>
                    <p>Education no. {id + 1}</p>
                    <EduExp
                        key={eduItem.id || id}
                        index={id}
                        cvData={cvData}
                        setCvData={setCvData}
                    />
                </div>
            ))}
            <button id="edu-exp-add" onClick={eduClickHandler}>
                Add
            </button>
        </div>
    );
}
