import { useState } from "react";
import SkillsCerts from "./SkillsCerts";

export default function SkillsCertsSection({ cvData, setCvData }) {
    const [expanded, setExpanded] = useState(false);

    const addEntry = () => {
        setCvData((prev) => ({
            ...prev,
            skillsCerts: [...prev.skillsCerts, {}],
        }));
    };

    return (
        <div className="skills-certs-section form-section">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>Skills & Certifications</h2>
                <button
                    type="button"
                    style={{
                        fontSize: "1em",
                        padding: "0.2em 0.7em",
                        marginLeft: "1em",
                    }}
                    onClick={() => setExpanded((e) => !e)}
                >
                    {expanded ? "−" : "+"}
                </button>
            </div>
            {expanded && (
                <>
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
                </>
            )}
        </div>
    );
}
