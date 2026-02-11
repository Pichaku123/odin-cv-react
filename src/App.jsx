import "./App.css";
import CVForm from "./components/Editor/CVForm";
import FormPreview from "./components/Preview/FormPreview";
import { useState } from "react";

function App() {
    const [cvData, setCvData] = useState({
        generalInfo: {},
        education: [{}],
        practical: [],
        projects: [], 
        skillsCerts: [], 
    });
    console.log(cvData);

    return (
        <section>
            <CVForm cvData={cvData} setCvData={setCvData} />
            <FormPreview cvData={cvData} />
        </section>
    );
}

export default App;
