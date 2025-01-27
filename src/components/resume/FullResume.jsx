import React from "react";
import { Header } from "./Header";
import { Education } from "./Education";
import '../../styles/FullResume.css'

export function FullResume({
    fullName,
    contactInformation
}) {
    return(
        <div className="resume-container">
            <Header 
                fullName={fullName}
                contactInformation={contactInformation}
            />
        </div>
    )
}