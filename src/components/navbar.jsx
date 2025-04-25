import { useNavigate, useLocation } from "react-router-dom" 
import ExploreIcon from "../assets/svg/exploreIcon.svg"
import OfferIcon from "../assets/svg/localOfferIcon.svg"
import ProfileIcon from "../assets/svg/personIcon.svg"
function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()
    return (
      <header className="navbar">
        <nav className="navbarNav">
        <ul className="navbarListItems">
            <li className="navbarListItem" onClick={()=> navigate('/')}>
                <img height="36px" src={ExploreIcon} />
                <p className="navbarListItemName">Explore</p>
            </li>
            <li className="navbarListItem" onClick={()=> navigate('/offers')}>
                <img height="36px" src={OfferIcon}/>
                <p className="navbarListItemName">Offer</p>
            </li>
            <li className="navbarListItem" onClick={()=> navigate('/profile')}>
                <img height="36px" src={ProfileIcon}/>
                <p className="navbarListItemName">Profile</p>
            </li>
        </ul>
        </nav>
      </header>
    )
  }
  
  export default NavBar
  