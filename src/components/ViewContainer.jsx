import HomePage from "./HomePage"
import Amanda from '../assets/img/Component1.svg'
import '../styles/viewcontainer.css'

const ViewContainer = () => {
    return(
        <div className="viewContainer">
        <HomePage/>
        <div className="imgDiv">
        <img className="Amanda" src={Amanda} alt="Illustration made by Amanda Ståhlberg" />
        </div>
        </div>
    )
}

export default ViewContainer;