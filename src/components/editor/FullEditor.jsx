import { GeneralInformation } from "./GeneralInformation";
import { EducationInformation } from "./EducationInformation";
import { WorkExperienceInformation } from "./WorkExperienceInformation";
import { SkillsInformation } from "./SkillsInformation";
import { Button } from "./Button";
import '../../styles/FullEditor.css'

export function FullEditor({
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    location, setLocation,
    educationSections,
    setEducationSection,
    handleEducationInput,
    addEducationSection,
    workExperienceSections,
    setWorkExperienceSection,
    handleWorkInput,
    addWorkExperienceSection,
    skillSections,
    setSkillSection,
    handleSkillInput,
    addSkillSection

}) {
    const handleEducationDelete = () => {
        if (educationSections.length > 1) {
            const newEducationSections = educationSections.slice(0, -1)
            setEducationSection(newEducationSections)
        }
    }

    const handleWorkDelete = () => {
        if (workExperienceSections.length > 1) {
            const newWorkSections = workExperienceSections.slice(0, -1)
            setWorkExperienceSection(newWorkSections)
        }
    }

    const handleSkillDelete = () => {
        if (skillSections.length > 1) {
            const newSkillSections = skillSections.slice(0, -1)
            setSkillSection(newSkillSections)
        }
    }

    return (
        <div className="editor-container">
            <GeneralInformation 
                firstName={firstName}
                setFirstName={setFirstName}
                lastName={lastName}
                setLastName={setLastName}
                phoneNumber={phoneNumber}
                setPhoneNumber={setPhoneNumber}
                email={email}
                setEmail={setEmail}
                location={location}
                setLocation={setLocation}
            />

            <div className="education-editor-container">
                <h2 className="education-header">Education</h2>
                {educationSections.map((section, index) => (
                    <EducationInformation 
                        key={index}
                        degree={section.degree}
                        setDegree={(value) => handleEducationInput(index, 'degree', value)}
                        major={section.major}
                        setMajor={(value) => handleEducationInput(index, 'major', value)}
                        schoolName={section.schoolName}
                        setSchoolName={(value) => handleEducationInput(index, 'schoolName', value)}
                        graduationMonth={section.graduationMonth}
                        setGraduationMonth={(value) => handleEducationInput(index, 'graduationMonth', value)}
                        graduationYear={section.graduationYear}
                        setGraduationYear={(value) => handleEducationInput(index, 'graduationYear', value)}
                    />
                ))}
                <div className="education-button-container">
                    <Button className="add" buttonName={"Add Education"} onClick={addEducationSection}/>
                    <Button className="delete" buttonName={"Delete Education"} onClick={handleEducationDelete} />
                </div>
            </div>
            
            <div className="work-editor-container">
                <h2 className="work-header">Work Experience</h2>
                {workExperienceSections.map((section, index) => (
                    <WorkExperienceInformation 
                        key={index}
                        jobTitle={section.jobTitle}
                        setJobTitle={(value) => handleWorkInput(index, 'jobTitle', value)}
                        company={section.company}
                        setCompany={(value) => handleWorkInput(index, 'company', value)}
                        companyLocation={section.companyLocation}
                        setCompanyLocation={(value) => handleWorkInput(index, 'companyLocation', value)}
                        startDate={section.startDate}
                        setStartDate={(value) => handleWorkInput(index, 'startDate', value)}
                        endDate={section.endDate}
                        setEndDate={(value) => handleWorkInput(index, 'endDate', value)}
                        bulletPointOne={section.bulletPointOne}
                        setBulletPointOne={(value) => handleWorkInput(index, 'bulletPointOne', value)}
                        bulletPointTwo={section.bulletPointTwo}
                        setBulletPointTwo={(value) => handleWorkInput(index, 'bulletPointTwo', value)}
                        bulletPointThree={section.bulletPointThree}
                        setBulletPointThree={(value) => handleWorkInput(index, 'bulletPointThree', value)}
                        />
                    ))}
                <div className="work-button-container">
                    <Button className="add" buttonName={"Add Work Experience"} onClick={addWorkExperienceSection}></Button>
                    <Button className="delete" buttonName={"Delete Work Experience"} onClick={handleWorkDelete}></Button>
                </div>
            </div>

            <div className="skills-editor-container">
                <h2 className="skill-header">Skills</h2>
                    {skillSections.map((section, index) => (
                        <SkillsInformation 
                            key={index}
                            skill={section.skill}
                            setSkill={(value) => handleSkillInput(index, 'skill', value)}
                        />
                    ))}
                <div className="skills-button-container">
                    <Button className="add" buttonName={"Add Skill"} onClick={addSkillSection}></Button>
                    <Button className="delete" buttonName={"Delete Skill"} onClick={handleSkillDelete}></Button>
                </div>
            </div>

        </div>
    )
}