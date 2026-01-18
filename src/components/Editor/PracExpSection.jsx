import { useState } from "react";
import PracExp from "./PracExp";

export default function PracExpSection(){
    const [pracList, setPracList] = useState([]);  //index as key
    const pracClickHandler = () => {
        setPracList(pracList => [...pracList, pracList.length]);
    }

    return (
        <div className="prac-exp form-section">
            <h2>Experience Details</h2>
            {pracList.map((id) => (
                <div>
                    <p>Experience No. {id + 1}</p>
                    <PracExp key={id} />
                </div>
            ))}
            <button id="prac-exp-add" onClick={pracClickHandler}>
                Add
            </button>
        </div>
    );
}