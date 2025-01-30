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
        const newSections = [...educationSections]
        newSections[index][field] = value
        setEducationSection(newSections)
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
                handleEducationInput={handleEducationInput}
                addEducationSection={addEducationSection}
            />
            <FullResume 
                fullName={fullName}
                contactInformation={contactInformation}
                educationSections={educationSections}
            />
        </div>
    )
}