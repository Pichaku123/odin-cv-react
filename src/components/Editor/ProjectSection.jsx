import { useState } from "react";
import Project from "./Project";

export default function ProjectSection({ cvData, setCvData }) {
    const [expanded, setExpanded] = useState(false);

    const addProject = () => {
        setCvData((prev) => ({
            ...prev,
            projects: [...prev.projects, {}],
        }));
    };

    return (
        <div className="project-section form-section">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>Projects</h2>
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
                    {cvData.projects.map((proj, id) => (
                        <div key={proj.id || id}>
                            <p>Project {id + 1}</p>
                            <Project
                                key={proj.id || id}
                                index={id}
                                cvData={cvData}
                                setCvData={setCvData}
                            />
                        </div>
                    ))}
                    <button onClick={addProject}>Add Project</button>
                </>
            )}
        </div>
    );
}
