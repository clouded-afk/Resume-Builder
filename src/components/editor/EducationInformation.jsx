import '../../styles/EducationInformation.css'

export function EducationInformation({
    degree, setDegree,
    major, setMajor,
    schoolName, setSchoolName,
    graduationMonth, setGraduationMonth,
    graduationYear, setGraduationYear
}) {
    return (
        <div className="education-info">
            <input 
                type="text"
                placeholder="Degree Type"
                value={degree}
                onChange={e => setDegree(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Major"
                value={major}
                onChange={e => setMajor(e.target.value)}
            />
            <input 
                type="text"
                placeholder="School Name"
                value={schoolName}
                onChange={e => setSchoolName(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Graduation Month"
                value={graduationMonth}
                onChange={e => setGraduationMonth(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Graduation Year"
                value={graduationYear}
                onChange={e => setGraduationYear(e.target.value)}
            />
        </div>
    )
}