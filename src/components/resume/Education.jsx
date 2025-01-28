import '../../styles/ResumeEducation.css'

export function Education({
    schoolName,
    degreeInformation,
    graduationInformation
}) {
    return (
        <div className="education">
            <h2 className='education-section-header'>Education</h2>
            <div className="divider"></div>
            <div className="degree-date-container">
                <div className="degree">{degreeInformation}</div>
                <div className="grad-date">{graduationInformation}</div>
            </div>
            <div className="school">{schoolName}</div>
        </div>
    )
}