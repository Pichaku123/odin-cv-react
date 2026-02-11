export default function Project({ cvData, setCvData, index }) {
    function handleProjectChange(field, value) {
        setCvData((prev) => ({
            ...prev,
            projects: prev.projects.map((entry, i) =>
                i === index ? { ...entry, [field]: value } : entry
            ),
        }));
    }

    const project = cvData.projects[index] || {};
    return (
        <>
            <div className="entry">
                <label htmlFor={`project-title-${index}`}>Title</label>
                <input
                    type="text"
                    id={`project-title-${index}`}
                    value={project.title || ""}
                    onChange={(e) =>
                        handleProjectChange("title", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`project-link-${index}`}>Link</label>
                <input
                    type="text"
                    id={`project-link-${index}`}
                    value={project.link || ""}
                    onChange={(e) =>
                        handleProjectChange("link", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`project-description-${index}`}>
                    Description
                </label>
                <input
                    type="text"
                    id={`project-description-${index}`}
                    value={project.description || ""}
                    onChange={(e) =>
                        handleProjectChange("description", e.target.value)
                    }
                />
            </div>
        </>
    );
}
