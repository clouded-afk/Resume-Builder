import React from "react";
import { Header } from "./Header";
import { Education } from "./Education";
import '../../styles/FullResume.css'

export function FullResume({
    fullName,
    contactInformation,
    degreeInformation,
    schoolName,
    graduationInformation
}) {
    return(
        <div className="resume-container">
            <Header 
                fullName={fullName}
                contactInformation={contactInformation}
            />
            <Education 
                degreeInformation={degreeInformation}
                schoolName={schoolName}
                graduationInformation={graduationInformation}
            />
        </div>
    )
}