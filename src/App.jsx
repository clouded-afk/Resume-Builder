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

    const fullName = firstName + ' ' + lastName
    const contactInformation = phoneNumber + ' || ' + email + ' || ' + location
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
            />
            <FullResume 
                fullName={fullName}
                contactInformation={contactInformation}
            />
        </div>
    )
}