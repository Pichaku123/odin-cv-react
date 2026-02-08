import { useState } from "react";
import PracExp from "./PracExp";

export default function PracExpSection({ cvData, setCvData }) {
    const pracClickHandler = () => {
        setCvData((prev) => ({
            ...prev,
            practical: [...prev.practical, {}],
        }));
    };

    return (
        <div className="prac-exp form-section">
            <h2>Experience Details</h2>
            {cvData.practical.map((pracItem, id) => (
                <div key={pracItem.id || id}>
                    <p>Experience No. {id + 1}</p>
                    <PracExp
                        key={pracItem.id || id}
                        index={id}
                        cvData={cvData}
                        setCvData={setCvData}
                    />
                </div>
            ))}
            <button id="prac-exp-add" onClick={pracClickHandler}>
                Add
            </button>
        </div>
    );
}
