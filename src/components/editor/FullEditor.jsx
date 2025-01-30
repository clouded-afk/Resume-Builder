import { GeneralInformation } from "./GeneralInformation";
import { EducationInformation } from "./EducationInformation";
import { Button } from "./Button";
import '../../styles/FullEditor.css'

export function FullEditor({
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    location, setLocation,
    educationSections,
    handleEducationInput,
    addEducationSection
}) {
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
                <Button buttonName={"Add Education"} onClick={addEducationSection}/>
            </div>

        </div>
    )
}