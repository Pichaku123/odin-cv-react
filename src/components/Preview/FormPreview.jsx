import "./FormPreview.css"

export default function FormPreview({ cvData }) {
    return (
        <>
            <div className="form-preview-container">
                <header className="cv-header">
                    <h2>{cvData.generalInfo.name || "Your Name"}</h2>
                    <div className="contact-info">
                        {cvData.generalInfo.email && <span>{cvData.generalInfo.email}</span>}
                        {cvData.generalInfo.phone && <span> • {cvData.generalInfo.phone}</span>}
                    </div>
                </header>
            </div>
        </>
    );
}