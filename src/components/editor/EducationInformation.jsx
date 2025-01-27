import React from "react";

export function EducationInformation({
    degree, setDegree,
    major, setMajor,
    schoolName, setSchoolName,
    gradutionDate, setGraduationDate
}) {
    return (
        <div className="education-info">
            <h2>Education</h2>
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
                type="date"
                value={gradutionDate}
                onChange={e => setGraduationDate(e.target.value)}
            />
        </div>
    )
}