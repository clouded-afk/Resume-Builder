import React from "react";
import "../../styles/GeneralInformation.css"

export function GeneralInformation({
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    email, setEmail

}) {
    return (
        <div className="personal-info">
            <h2 className="personal-header">Personal Information</h2>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
            />
            <input
                type="tel"
                placeholder="999-999-9999"
                value={phoneNumber}
                onChange={e => setPhoneNumber(e.target.value)}
            />
            <input
                type="email"
                placeholder="example@example.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
        </div>
    )
}