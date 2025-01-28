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

    const [degree, setDegree] = useState('')
    const [major, setMajor] = useState('')
    const [schoolName, setSchoolName] = useState('')
    const [gradMonth, setGradtMonth] = useState('')
    const [gradYear, setGradYear] = useState('')
    
    const fullName = firstName + ' ' + lastName
    const contactInformation = phoneNumber + ' || ' + email + ' || ' + location

    const degreeInformation = degree + ', ' + major
    const graduationInformation = gradMonth + ' ' + gradYear

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
                degree={degree}
                setDegree={setDegree}
                major={major}
                setMajor={setMajor}
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                gradutionMonth={gradMonth}
                setGraduationMonth={setGradtMonth}
                graduationYear={gradYear}
                setGraduationYear={setGradYear}
            />
            <FullResume 
                fullName={fullName}
                contactInformation={contactInformation}
                degreeInformation={degreeInformation}
                graduationInformation={graduationInformation}
                schoolName={schoolName}
            />
        </div>
    )
}