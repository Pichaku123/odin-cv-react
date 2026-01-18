import EduExp from "./EduExp";
import { useState } from "react";

export default function EduExpSection(){
    const [eduList, setEduList] = useState([0]);    //using index as id for now
    const eduClickHandler = () => {
        setEduList(eduList => [...eduList, eduList.length]);    //updates length as well
    }

    return (
        <div className="edu-exp form-section">
            <h2>Education Information</h2>
            {eduList.map((id) => (
                <div>
                    <p>Education no. {id + 1}</p>
                    <EduExp key={id} />
                </div>
            ))}
            <button id="edu-exp-add" onClick={eduClickHandler}>
                Add
            </button>
        </div>
    );
}