import '../assets/style/Footer.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Footer () {
    return (

   <footer className="footer-sec py-5">
            <div className="container">
                <div className="row g-4">
                
                    <div className="col-lg-4 col-md-6">
                        <h3 className="footer-brand">JIGAR <span>BLAST</span></h3>
                        <p className="footer-text mt-3">
                            The authentic taste of Madurai's famous Jigarthanda, now with a modern blast of flavors. 
                            Experience the chill in every sip!
                        </p>
                        <div className="social-icons d-flex gap-3 mt-4">
                            <a href="#"><i className="bi bi-facebook"></i></a>
                            <a href="#"><i className="bi bi-instagram"></i></a>
                            <a href="#"><i className="bi bi-youtube"></i></a>
                            <a href="#"><i className="bi bi-whatsapp"></i></a>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6">
                        <h5 className="footer-title">Quick Links</h5>
                        <ul className="footer-links">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/about">About Us</Link></li>
                            <li><NavHashLink to="/about#store">Store Locator</NavHashLink></li>
                            <li><Link to="/login">Login</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-title">Our Menus</h5>
                        <ul className="footer-links">
                            <li><Link to="/product">Jigarthanda</Link></li>
                            <li><Link to="/product">Special Jigarthanda</Link></li>
                            <li><Link to="/product">Milkshakes</Link></li>
                            <li><Link to="/product">Ice Creams</Link></li>
                        </ul>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <h5 className="footer-title">Contact Info</h5>
                        <p className="footer-text mb-2"><i className="bi bi-geo-alt-fill"></i> Madurai, TN.</p>
                        <p className="footer-text mb-2"><i className="bi bi-telephone-fill"></i> +91 95874256874</p>
                        <p className="footer-text mb-4"><i className="bi bi-envelope-fill"></i>jigarblast@gmail.com</p>
                        <h6 className="footer-title fw-bold">Opening Hours:</h6>
                        <p className="footer-text">Mon - Sun: 10:00 AM - 11:00 PM</p>
                    </div>

                </div>

                <hr className="footer-hr my-4" />

                <div className="row">
                    <div className="col-md-12 text-center">
                        <p className="copyright-text">
                            © 2026 <strong>Jigar Blast</strong>. All Rights Reserved. Designed with <i className="bi bi-heart-fill text-danger"></i>
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;