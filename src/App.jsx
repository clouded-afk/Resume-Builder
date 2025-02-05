import { useState } from "react";
import { FullEditor } from "./components/editor/FullEditor";
import { FullResume } from "./components/resume/FullResume";
import './App.css'

export function App() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')
    const [location, setLocation] = useState('')

    const [educationSections, setEducationSection] = useState([
        { degree: "", major: "", schoolName: "", graduationMonth: "", graduationYear: "" }
    ])

    const addEducationSection = () => {
        setEducationSection([...educationSections, { degree: "", major: "", schoolName: "", gradutionMonth: "", graduationYear: ""}])
    }

    const handleEducationInput = (index, field, value) => {
        const newEducationSections = [...educationSections]
        newEducationSections[index][field] = value
        setEducationSection(newEducationSections)
    }

    const [workSections, setWorkSection] = useState([
        { jobTitle: "", companyName: "", companyLocation: "", startDate: "", endDate: "", bulletPointOne: "", bulletPointTwo: "", bulletPointThree: ""}
    ])

    const addWorkExperienceSection = () => {
        setWorkSection([...workSections, { jobTitle: "", companyName: "", companyLocation: "", startDate: "", endDate: "", bulletPointOne: "", bulletPointTwo: "", bulletPointThree: ""}])
    }

    const handleWorkInput = (index, field, value) => {
        const newWorkSections = [...workSections]
        newWorkSections[index][field] = value
        setWorkSection(newWorkSections)
    }

    const [skillSections, setSkillSection] = useState([
        { skill: "" }
    ])

    const addSkillSection = () => {
        setSkillSection([...skillSections, { skill: ""}])
    }

    const handleSkillInput = (index, field, value) => {
        const newSkillSections = [...skillSections]
        newSkillSections[index][field] = value
        setSkillSection(newSkillSections)
    }
    
    const fullName = `${firstName} ${lastName}`
    const contactInformation = `${phoneNumber} || ${email} || ${location}`

    return (
        <div className="mainContainer">
            <FullEditor 
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
                educationSections={educationSections}
                setEducationSection={setEducationSection}
                handleEducationInput={handleEducationInput}
                addEducationSection={addEducationSection}
                workExperienceSections={workSections}
                setWorkExperienceSection={setWorkSection}
                addWorkExperienceSection={addWorkExperienceSection}
                handleWorkInput={handleWorkInput}
                skillSections={skillSections}
                setSkillSection={setSkillSection}
                addSkillSection={addSkillSection}
                handleSkillInput={handleSkillInput}
            />
            <FullResume 
                fullName={fullName}
                contactInformation={contactInformation}
                educationSections={educationSections}
                workSections={workSections}
                skillsSections={skillSections}
            />
        </div>
    )
}