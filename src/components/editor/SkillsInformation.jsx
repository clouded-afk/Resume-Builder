export function SkillsInformation({
    skill, setSkill
}) {
    return (
        <div className="skill-info">
            <input 
                type="text"
                placeholder="skill"
                value={skill}
                onChange={e => setSkill(e.target.value)}
            />
        </div>
    )
}