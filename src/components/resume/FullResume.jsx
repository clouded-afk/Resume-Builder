import { Header } from "./Header";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import '../../styles/FullResume.css'

export function FullResume({
    fullName,
    contactInformation,
    educationSections,
    workSections
}) {
    return(
        <div className="resume-container">
            <Header 
                fullName={fullName}
                contactInformation={contactInformation}
            />
            <Education
                educationSections={educationSections}
            />
            <WorkExperience 
                workSections={workSections}
            />
        </div>
    )
}