import EduExpSection from "./EduExpSection";
import GenInfo from "./GenInfo";
import PracExpSection from "./PracExpSection";
import ProjectSection from "./ProjectSection";
import SkillsCertsSection from "./SkillsCertsSection";

export default function CVForm({cvData, setCvData}){
    return (
        <div className="cv-form">
            <GenInfo cvData={cvData} setCvData={setCvData} />
            <EduExpSection cvData={cvData} setCvData={setCvData} />
            <PracExpSection cvData={cvData} setCvData={setCvData} />
            <ProjectSection cvData={cvData} setCvData={setCvData} />
            <SkillsCertsSection cvData={cvData} setCvData={setCvData} />
        </div>
    );
}