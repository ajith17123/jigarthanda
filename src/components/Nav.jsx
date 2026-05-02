import '../assets/style/Nav.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import navimg from '../assets/images/navimg.jpg';


function Nav () {
    return (

        <>

<div className='nav-img'>
   <img src={navimg} className='img-fluid nav-img' alt="jigarthanda" />
</div>

   <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">Jigar Blast</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About-Us</Link>
        </li>
         <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Our Menus
          </a>
          <ul className="dropdown-menu">
            <li><Link class="dropdown-item" to="/product">Jigarthanda</Link></li>
            <li><Link class="dropdown-item" to="/product">Special Jigarthanda</Link></li>
            <li><Link class="dropdown-item" to="/product">Nuts Mixed Jigarthanda</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#gall">Gallery</NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#cont">Contact-Us</NavHashLink>
        </li>
        <li className="nav-item">
          <NavHashLink className="nav-link" to="/about#store">Store Locator</NavHashLink>
        </li>
         <li className="nav-item">
          <Link className="nav-link" to="/login">Login/signup</Link>
        </li>
      </ul>

       <button className="nav-item">
          <Link className="nav-link" to="/product">Order Now</Link>
        </button>

    </div>
  </div>
</nav>

</>

    )
}

export default Nav;