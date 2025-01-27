import { GeneralInformation } from "./GeneralInformation";
import { EducationInformation } from "./EducationInformation";

export function FullEditor({
    firstName, setFirstName,
    lastName, setLastName,
    phoneNumber, setPhoneNumber,
    email, setEmail,
    location, setLocation,
    degree, setDegree,
    major, setMajor,
    schoolName, setSchoolName,
    gradutionDate, setGraduationDate
}) {
    return (
        <div>
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
            <EducationInformation 
                degree={degree}
                setDegree={setDegree}
                major={major}
                setMajor={setMajor}
                schoolName={schoolName}
                setSchoolName={setSchoolName}
                gradutionDate={gradutionDate}
                setGraduationDate={setGraduationDate}
            />
        </div>
    )
}