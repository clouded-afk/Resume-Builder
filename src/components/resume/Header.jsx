import '../../styles/ResumeHeader.css'

export function Header( {fullName, contactInformation}) {
    return (
        <div className="resume-header">
            <h2 className="name">{fullName}</h2>
            <h3 className="contact">{contactInformation}</h3>
        </div>
    )
}