import '../../styles/ResumeSkills.css'

export function Skills({
    skillsSections
}) {
    return (
        <div className="skills">
            {skillsSections.map((section, index) => (
                <div key={index}>
                    <div>&nbsp;{section.skill}&nbsp;|</div>
                </div>
            ))}
        </div>
    )
}