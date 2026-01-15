import { useState } from "react";
import GenInfo from "./components/GenInfo";
import EduExp from "./components/EduExp";
import PracExp from "./components/PracExp";
import "./App.css";

function App() {
    
    return (
        <>
            <GenInfo/>
            <EduExp />
            <PracExp />
        </>
    );
}

export default App;
