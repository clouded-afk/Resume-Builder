import "../../styles/SkillsInformation.css"

export function SkillsInformation({
    skill, setSkill
}) {
    return (
        <div className="skill-info">
            <input 
                type="text"
                placeholder="Skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
            />
        </div>
    )
}