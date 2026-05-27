import { useState } from "react";
import PracExp from "./PracExp";

export default function PracExpSection({ cvData, setCvData }) {
    const [expanded, setExpanded] = useState(false);

    const pracClickHandler = () => {
        setCvData((prev) => ({
            ...prev,
            practical: [...prev.practical, {}],
        }));
    };

    return (
        <div className="prac-exp form-section">
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                }}
            >
                <h2>Experience Details</h2>
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
                    {cvData.practical.map((pracItem, id) => (
                        <div key={pracItem.id || id}>
                            <p>Experience No. {id + 1}</p>
                            <PracExp
                                key={pracItem.id || id}
                                index={id}
                                cvData={cvData}
                                setCvData={setCvData}
                            />
                        </div>
                    ))}
                    <button id="prac-exp-add" onClick={pracClickHandler}>
                        Add
                    </button>
                </>
            )}
        </div>
    );
}
