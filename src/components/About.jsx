import '../assets/style/About.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import about1 from '../assets/videos/about1.mp4';
import about2 from '../assets/videos/about2.mp4';
import abimg1 from '../assets/images/ab.png';

function About () {

   const shops = [
        { id: 1, place: "Madurai Main", address: "12, Town Hall Road, Madurai - 625001" },
        { id: 2, place: "Anna Nagar", address: "45, 80 Feet Road, Anna Nagar, Madurai - 620020" },
        { id: 3, place: "Chennai T-Nagar", address: "G-Block, Pondy Bazaar, Chennai - 600017" },
        { id: 4, place: "Trichy Junction", address: "Railway Station Road, Trichy - 620001" },
        { id: 5, place: "Coimbatore RS Puram", address: "DB Road, RS Puram, Coimbatore - 641002" },
        { id: 6, place: "Salem Central", address: "New Bus Stand Backside, Salem - 636004" }
    ];

    return (

        <>

        {/* {aboutsection} */}

  <section className='about-sec py-5'>
     <div className='container'>
         <h2 className='section-title' data-aos="fade-down">Who We Are</h2>
         <div className='row align-items-center mt-4'>
               
           <div className='col-12' data-aos="fade-right">
                <p className='about-para'>
                                Jigar Blast is more than just a dessert shop; it's a celebration of Madurai's iconic flavors. 
                                Our journey started with a simple mission: to bring the authentic, creamy, and refreshing 
                                taste of traditional Jigarthanda to everyone. We use only the finest natural ingredients 
                                to ensure that every sip gives you a "Real Blast" of happiness.
                </p>
           </div>

         </div>
     </div>
  </section>

  {/* {gallerysection} */}

  <section className='gal-sec py-5' id='gall'>
        <div className='container'>
           <h2 className='section-title'>Our Gallery</h2>
          <div className='row g-3 align-items-stretch'>
    <div className='col-md-4 col-12' data-aos="zoom-in">
         <video src={about1} className='vide-gal' muted autoPlay loop></video>
    </div>
    <div className='col-md-4 col-12' data-aos="zoom-in" data-aos-delay="100">
         <video src={about2} className='vide-gal' muted autoPlay loop></video>
    </div>
    <div className='col-md-4 col-12' data-aos="zoom-in">
         <img src={abimg1} className='img-fluid about-gal' alt="jigarthanda" />
    </div>
</div>
        </div>
  </section>

  {/* {contactsection} */}

  <section className='cont-section py-5' id='cont'>
       <div className='container'>
           <h2 className='section-title'>Contact Us</h2>
           <div className='row g-4 align-items-stretch'>
              
              <div className='col-lg-6 col-12' data-aos="fade-up">
                  <div className='contact-card h-100'>
                      <form className='h-100 d-flex flex-column justify-content-between'>
                        <div className='mb-3'>
                           <input type="text" className='form-control' placeholder='Your Name' />
                        </div>
                        <div className='mb-3'>
                            <input type="email" className="form-control" placeholder="Your Email" />
                        </div>
                        <div className='mb-3'>
                            <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
                       </div>
                       <button className='btn-cont mt-auto'>Send Message</button>
                      </form>
                  </div>
              </div>

                <div className='col-lg-6 col-12' data-aos="fade-up" data-aos-delay="200">
                     <div className='card map-card h-100'>
                          <iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.123456789!2d78.11!3d9.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zOcKwNTUnMTIuMCJOIDc4wrAwNic0MC4wIkU!5e0!3m2!1sen!2sin!4v1234567890" 
                                    width="100%" height="100%"  allowFullScreen="" loading="lazy">
                          </iframe>
                     </div>
                </div>

           </div>
       </div>
  </section>

  {/* {getintouchsection} */}

  <section className='get-in py-5'>
    <div className='container text-center'>
        <h2 className='section-title' data-aos="fade-up">Get In Touch</h2>
        <div className='row g-4 mt-3'>
            
            <div className='col-md-4 col-12' data-aos="fade-up">
                <a href="tel:+919876543210" className='contact-anchor'>
                    <div className='cont-cardd'>
                        <i className="bi bi-telephone-fill"></i>
                        <span>Call Us</span>
                    </div>
                </a>
            </div>

            <div className='col-md-4 col-12' data-aos="fade-up" data-aos-delay="100">
                <a href="mailto:info@jigarblast.com" className='contact-anchor'>
                    <div className='cont-cardd'>
                        <i className="bi bi-envelope-fill"></i>
                        <span>Mail Us</span>
                    </div>
                </a>
            </div>

            <div className='col-md-4 col-12' data-aos="fade-up" data-aos-delay="200">
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className='contact-anchor'>
                    <div className='cont-cardd'>
                        <i className="bi bi-whatsapp text-success"></i>
                        <span>WhatsApp</span>
                    </div>
                </a>
            </div>

        </div>
    </div>
</section>

  {/* {storelocator} */}

<section className='store-loc py-5' id='store' >
    <div className='container'>
        <h2 className='section-title'>Store Locator</h2>
         <div className='row g-4'>
            
            {shops.map(shop => (
                                <div className='col-md-4' key={shop.id} data-aos="fade-up">
                                    <div className='shop-box'>
                                        <h5>{shop.place}</h5>
                                        <p className='small text-muted store-para'>{shop.address}</p>
                                    </div>
                                </div>
             ))}

         </div>
    </div>
</section>

  </>

    )
}

export default About;