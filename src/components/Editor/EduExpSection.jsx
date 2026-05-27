import EduExp from "./EduExp";
import { useState } from "react";

export default function EduExpSection({ cvData, setCvData }) {
    const [expanded, setExpanded] = useState(false);

    const eduClickHandler = () => {
        setCvData((prev) => ({
            ...prev,
            education: [...prev.education, {}],
        }));
    };

    return (
        <div className="edu-exp form-section">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>Education Information</h2>
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
                    {cvData.education.map((eduItem, id) => (
                        <div key={eduItem.id || id}>
                            <p>Education no. {id + 1}</p>
                            <EduExp
                                key={eduItem.id || id}
                                index={id}
                                cvData={cvData}
                                setCvData={setCvData}
                            />
                        </div>
                    ))}
                    <button id="edu-exp-add" onClick={eduClickHandler}>
                        Add
                    </button>
                </>
            )}
        </div>
    );
}
