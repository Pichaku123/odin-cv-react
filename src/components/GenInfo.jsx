import { useState } from "react";

export default function GenInfo() {
    const [name, setName] = useState("John Doe");
    const nameHandler = (e) => {
        setName(e.target.value);
    }
    return (
        <>
            <input 
                type="text" 
                value={name}
                onChange={nameHandler}
            />
            <p>Name = {name}</p>
        </>
    );
}
