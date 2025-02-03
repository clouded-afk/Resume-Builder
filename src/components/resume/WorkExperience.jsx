export function WorkExperience({
    workSections
}) {
    return (
        <div className="work">
            <h2 className="work-section-header">Experience</h2>
            <div className="divider"></div>
            {workSections.map((section, index) => (
                <div key={index}>
                    <div className="job-title-dates-container">
                        <div className="job-title">{section.jobTitle}</div>
                        <div className="job-dates">{section.startDate} - {section.endDate}</div>
                    </div>
                    <div className="company-info">{section.company}, {section.companyLocation}</div>
                    <ul className="job-details-container">
                        <li className="bullet-point">{section.bulletPointOne}</li>
                        <li className="bullet-point">{section.bulletPointTwo}</li>
                        <li className="bullet-point">{section.bulletPointThree}</li>
                    </ul>
                    {index < workSections.length - 1}
                </div>
            ))}
        </div>
    )
}