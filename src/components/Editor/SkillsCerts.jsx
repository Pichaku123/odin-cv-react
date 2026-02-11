export default function SkillsCerts({ cvData, setCvData, index }) {
    function handleChange(field, value) {
        setCvData((prev) => ({
            ...prev,
            skillsCerts: prev.skillsCerts.map((entry, i) =>
                i === index ? { ...entry, [field]: value } : entry
            ),
        }));
    }

    const entry = cvData.skillsCerts[index] || {};
    return (
        <>
            <div className="entry">
                <label htmlFor={`skills-${index}`}>Skills</label>
                <input
                    type="text"
                    id={`skills-${index}`}
                    value={entry.skills || ""}
                    onChange={(e) => handleChange("skills", e.target.value)}
                />
            </div>
            <div className="entry">
                <label htmlFor={`certification-${index}`}>Certification</label>
                <input
                    type="text"
                    id={`certification-${index}`}
                    value={entry.certification || ""}
                    onChange={(e) =>
                        handleChange("certification", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`technology-${index}`}>Technology</label>
                <input
                    type="text"
                    id={`technology-${index}`}
                    value={entry.technology || ""}
                    onChange={(e) => handleChange("technology", e.target.value)}
                />
            </div>
            <div className="entry">
                <label htmlFor={`languages-${index}`}>Languages</label>
                <input
                    type="text"
                    id={`languages-${index}`}
                    value={entry.languages || ""}
                    onChange={(e) => handleChange("languages", e.target.value)}
                />
            </div>
        </>
    );
}
