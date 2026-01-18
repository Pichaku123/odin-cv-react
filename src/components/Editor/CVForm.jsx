import EduExpSection from "./EduExpSection";
import GenInfo from "./GenInfo";
import PracExpSection from "./PracExpSection";

export default function CVForm(){
    return(
        <div className="cv-form">
            <GenInfo />
            <EduExpSection />
            <PracExpSection />
        </div>
    )
}