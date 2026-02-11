import SkillsCerts from "./SkillsCerts";

export default function SkillsCertsSection({ cvData, setCvData }) {
    const addEntry = () => {
        setCvData((prev) => ({
            ...prev,
            skillsCerts: [...prev.skillsCerts, {}],
        }));
    };

    return (
        <div className="skills-certs-section form-section">
            <h2>Skills & Certifications</h2>
            {cvData.skillsCerts.map((entry, id) => (
                <div key={entry.id || id}>
                    <p>Entry {id + 1}</p>
                    <SkillsCerts
                        key={entry.id || id}
                        index={id}
                        cvData={cvData}
                        setCvData={setCvData}
                    />
                </div>
            ))}
            <button onClick={addEntry}>Add Entry</button>
        </div>
    );
}
