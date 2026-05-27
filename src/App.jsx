import "./App.css";
import CVForm from "./components/Editor/CVForm";
import FormPreview from "./components/Preview/FormPreview";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
    const [cvData, setCvData] = useState({
        generalInfo: {},
        education: [{}],
        practical: [],
        projects: [],
        skillsCerts: [],
    });

    return (
        <>
            <Header />
            <section>
                <CVForm cvData={cvData} setCvData={setCvData} />
                <FormPreview cvData={cvData} />
            </section>
            <Footer />
        </>
    );
}

export default App;
