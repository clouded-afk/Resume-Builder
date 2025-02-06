import { Button } from "../editor/Button"
import '../../styles/PageHeader.css'

export function PageHeader() {
    return (
        <div className="header">
            <h1>Build a Resume</h1>
            <Button buttonName={"Save"}></Button>
        </div>
    )
}