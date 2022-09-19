import {Link} from 'react-router-dom'

const NavBar = () => {
    return(
        <ul className = 'nav-bar-style'>
        <li className = 'nav-bar-list-style'>
        <Link to= '/' className='nav-bar-link-style' >Home</Link>
        <Link to= '/about' className='nav-bar-link-style' >About</Link>
        </li>
        </ul>
    )
}

export default NavBar