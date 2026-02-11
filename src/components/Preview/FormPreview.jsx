import "./FormPreview.css"

export default function FormPreview({ cvData }) {
    const { generalInfo, education, practical, projects, skillsCerts } = cvData;
    
    return (
        <>
            <div className="form-preview-container">
                <header className="cv-header">
                    <h2>{generalInfo.name || "Your Name"}</h2>
                    <div className="contact-info">
                        {generalInfo.email && <span>{generalInfo.email}</span>}
                        {generalInfo.phone && <span> • {generalInfo.phone}</span>}
                        {generalInfo.link && <span> • {generalInfo.link}</span>}
                        {generalInfo.location && <span> • {generalInfo.location}</span>}
                    </div>
                </header>

                <section className="cv-section">
                    <h2>Education</h2>
                    {education.map((edu, index) => (
                        <div key={index} className="cv-item">
                            <div className="item-header">
                                <h3>{edu.school || "School/University"}</h3>
                                <span className="dates">
                                    {edu.startDateEdu} - {edu.endDateEdu}
                                </span>
                            </div>
                            <p>{edu.degree || "Degree"}</p>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2>Experience</h2>
                    {practical.map((prac, index) => (
                        <div key={index} className="cv-item">
                            <div className="item-header">
                                <h3>{prac.company || "Company"}</h3>
                                <span className="dates">
                                    {prac.startDatePrac} - {prac.endDatePrac}
                                </span>
                            </div>
                            <p>{prac.pracTitle || "Title"}</p>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2>Projects</h2>
                    {projects && projects.map((proj, index) => (
                        <div key={index} className="cv-item">
                            <div className="item-header">
                                <h3>{proj.title || "Project Title"}</h3>
                                {proj.link && <span className="project-link">({proj.link})</span>}
                            </div>
                            <p>{proj.description || "Description"}</p>
                        </div>
                    ))}
                </section>

                <section className="cv-section">
                    <h2>Skills & Certifications</h2>
                    {skillsCerts && skillsCerts.map((entry, index) => (
                        <div key={index} className="cv-item">
                            <p><strong>Skills:</strong> {entry.skills || "-"}</p>
                            <p><strong>Certification:</strong> {entry.certification || "-"}</p>
                            <p><strong>Technology:</strong> {entry.technology || "-"}</p>
                            <p><strong>Languages:</strong> {entry.languages || "-"}</p>
                        </div>
                    ))}
                </section>
            </div>
        </>
    );
}