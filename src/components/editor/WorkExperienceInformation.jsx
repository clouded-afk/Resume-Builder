import '../../styles/WorkInformation.css'

export function WorkExperienceInformation({
    jobTitle, setJobTitle,
    company, setCompany,
    companyLocation, setCompanyLocation,
    startDate, setStartDate,
    endDate, setEndDate,
    bulletPointOne, setBulletPointOne,
    bulletPointTwo, setBulletPointTwo,
    bulletPointThree, setBulletPointThree
}) {
    return (
        <div className="work-info">
            <input 
                type="text"
                placeholder="Job Title"
                value={jobTitle}
                onChange={e => setJobTitle(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Company Name"
                value={company}
                onChange={e => setCompany(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Company Location (City, State)"
                value={companyLocation}
                onChange={e => setCompanyLocation(e.target.value)}
            />
            <input 
                type="text"
                placeholder="Start Date (Month Year)"
                value={startDate}
                onChange={e => setStartDate(e.target.value)}
            />
            <input 
                type="text"
                placeholder='End Date (Month Year or "Present")'
                value={endDate}
                onChange={e => setEndDate(e.target.value)}
            />
            <textarea 
                placeholder="Bullet Point One"
                value={bulletPointOne}
                onChange={e => setBulletPointOne(e.target.value)}
            />
            <textarea 
                placeholder="Bullet Point Two"
                value={bulletPointTwo}
                onChange={e => setBulletPointTwo(e.target.value)}
            />
            <textarea 
                placeholder="Bullet Point Three"
                value={bulletPointThree}
                onChange={e => setBulletPointThree(e.target.value)}
            />
        </div>
    )
}