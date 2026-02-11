import Project from "./Project";

export default function ProjectSection({ cvData, setCvData }) {
    const addProject = () => {
        setCvData((prev) => ({
            ...prev,
            projects: [...prev.projects, {}],
        }));
    };

    return (
        <div className="project-section form-section">
            <h2>Projects</h2>
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
        </div>
    );
}
