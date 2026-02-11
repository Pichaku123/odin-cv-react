export default function EduExp({ cvData, setCvData, index }) {
    function handleEduChange(field, value) {
        setCvData((prev) => ({
            ...prev,
            education: prev.education.map((entry, i) =>
                //field is a string here
                i === index ? { ...entry, [field]: value } : entry
            ),
        }));
    }

    const edu = cvData.education[index] || {};
    //entries -> school, degree, start-date, end-date
    return (
        <>
            <div className="entry">
                <label htmlFor={`school-${index}`}>School/University</label>
                <input
                    type="text"
                    name="school"
                    id={`school-${index}`}
                    value={edu.school || ""}
                    onChange={(e) => handleEduChange("school", e.target.value)}
                />
            </div>
            <div className="entry">
                <label htmlFor={`degree-${index}`}>Degree</label>
                <input
                    type="text"
                    name="degree"
                    id={`degree-${index}`}
                    value={edu.degree || ""}
                    onChange={(e) => handleEduChange("degree", e.target.value)}
                />
            </div>
            <div className="entry">
                <label htmlFor={`start-date-edu-${index}`}>Start Date</label>
                <input
                    type="date"
                    name="start-date-edu"
                    id={`start-date-edu-${index}`}
                    value={edu.startDateEdu || ""}
                    onChange={(e) =>
                        handleEduChange("startDateEdu", e.target.value)
                    }
                />
            </div>
            <div className="entry">
                <label htmlFor={`end-date-edu-${index}`}>End Date</label>
                <input
                    type="date"
                    name="end-date-edu"
                    id={`end-date-edu-${index}`}
                    value={edu.endDateEdu || ""}
                    onChange={(e) =>
                        handleEduChange("endDateEdu", e.target.value)
                    }
                />
            </div>
        </>
    );
}
