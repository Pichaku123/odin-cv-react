export default function PracExp({ cvData, setCvData, index }) {
    function handlePracChange(field, value) {
        setCvData((prev) => ({
            ...prev,
            practical: prev.practical.map((entry, i) =>
                i === index ? { ...entry, [field]: value } : entry
            ),
        }));
    }

    const prac = cvData.practical[index] || {};
    return (
        <>
            <div className="entry">
                <label htmlFor={`prac-title-${index}`}>Title/Designation</label>
                <input
                    type="text"
                    name="prac-title"
                    id={`prac-title-${index}`}
                    value={prac["prac-title"] || ""}
                    onChange={(e) =>
                        handlePracChange("prac-title", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`company-${index}`}>Company</label>
                <input
                    type="text"
                    name="company"
                    id={`company-${index}`}
                    value={prac.company || ""}
                    onChange={(e) =>
                        handlePracChange("company", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`start-date-prac-${index}`}>Start Date</label>
                <input
                    type="date"
                    name="start-date-prac"
                    id={`start-date-prac-${index}`}
                    value={prac["start-date-prac"] || ""}
                    onChange={(e) =>
                        handlePracChange("start-date-prac", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`end-date-prac-${index}`}>End Date</label>
                <input
                    type="date"
                    name="end-date-prac"
                    id={`end-date-prac-${index}`}
                    value={prac["end-date-prac"] || ""}
                    onChange={(e) =>
                        handlePracChange("end-date-prac", e.target.value)
                    }
                />
            </div>
        </>
    );
}
