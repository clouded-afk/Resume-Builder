import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import '../../styles/PageFooter.css'

export function PageFooter() {
    return (
        <div className='footer'>
            <div className='footer-prefix'>Coded by:</div>
            <a href="https://github.com/clouded-afk">clouded-afk</a>
            <FontAwesomeIcon icon={faGithub}/>
        </div>
    )
}