import { Header } from "./Header";
import { Education } from "./Education";
import { WorkExperience } from "./WorkExperience";
import { Skills } from "./Skills";
import '../../styles/FullResume.css'

export function FullResume({
    fullName,
    contactInformation,
    educationSections,
    workSections,
    skillsSections
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
            <div className="skills-section">
                <h2 className="skill-section-header">Skills</h2>
                <div className="divider"></div>
                <div className="skills-container">
                    <Skills 
                        skillsSections={skillsSections}
                    />
                </div>
            </div>
        </div>
    )
}