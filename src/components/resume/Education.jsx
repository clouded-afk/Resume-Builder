import '../../styles/ResumeEducation.css'

export function Education({
    educationSections
}) {
    return (
        <div className="education">
            <h2 className='education-section-header'>Education</h2>
            <div className="divider"></div>
            {educationSections.map((section, index) => (
                <div>
                    <div key={index} className='degree-date-container'>
                        <div className="degree">{section.degree}, {section.major}</div>
                        <div className="grad-date">{section.graduationMonth} {section.graduationYear}</div>
                    </div>
                    <div className="school">{section.schoolName}</div>
                    {index < educationSections.length - 1}
                </div>
            ))}
        </div>
    )
}