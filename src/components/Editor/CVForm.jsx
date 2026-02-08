import EduExpSection from "./EduExpSection";
import GenInfo from "./GenInfo";
import PracExpSection from "./PracExpSection";
import { useState } from "react";

export default function CVForm({cvData, setCvData}){
    return (
        <div className="cv-form">
            <GenInfo cvData={cvData} setCvData={setCvData} />
            <EduExpSection cvData={cvData} setCvData={setCvData} />
            <PracExpSection cvData={cvData} setCvData={setCvData} />
        </div>
    );
}