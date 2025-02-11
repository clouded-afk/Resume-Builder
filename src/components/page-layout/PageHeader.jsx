import { Button } from "../editor/Button"
import html2pdf from "html2pdf.js"
import '../../styles/PageHeader.css'

export function PageHeader() {

    const savePDF = () => {
        const resume = document.querySelector('.resume-container')
        
        const originalBoxShadow = resume.style.boxShadow
        resume.style.boxShadow = 'none'

        const opt = {
            margin: [0, 0, 0, 0],
            filename: 'resume.pdf',
            image: { type: 'jpeg', qualit: 0.98 },
            html2canvas: { scale: 2, useCORS: true },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait'}
        }

        html2pdf().set(opt).from(resume).save().then(() => {
            resume.style.boxShadow = originalBoxShadow
        })

    }
    return (
        <div className="header">
            <h1>Build a Resume</h1>
            <Button className={"save-button"} buttonName={"Download PDF"} onClick={savePDF}></Button>
        </div>
    )
}
