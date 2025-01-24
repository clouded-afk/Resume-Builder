import { useState } from "react";
import "../../styles/GeneralInformation.css"

export function GeneralInformation() {
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [email, setEmail] = useState('')

    const fullName = firstName + ' ' + lastName

    return (
        <div>
            <h2>Personal Information</h2>
            <input
                type="text"
                placeholder="First Name"
            />
            <input
                type="text"
                placeholder="Last Name"
            />
            <input
                type="tel"
                placeholder="999-999-9999"
            />
            <input
                type="email"
                placeholder="example@example.com"
            />
        </div>
    )
}