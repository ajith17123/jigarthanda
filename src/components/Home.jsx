import '../assets/style/Home.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import heroimg from '../assets/images/heroimg.jpg';
import pp1 from '../assets/images/pp1.png';
import pp2 from '../assets/images/pp2.png';
import pp3 from '../assets/images/pp3.png';
import pp4 from '../assets/images/pp4.png';
import aboutimg from '../assets/images/aboutimg.png';

function Home () {

   const products = [
    { 
      id: 1, 
      name: "Regular Jigarthanda", 
      para: "The timeless charm, our Regular Jigarthanda - a classic treat that captures tradition.", 
      img: pp3 
    },
    { 
      id: 2, 
      name: "Basundhi with Ice-cream", 
      para: "Explore the fusion of Indian flavors and velvety sweetness with our Basundhi with ice cream.", 
      img: pp4 
    },
    { 
      id: 3, 
      name: "Jumbo Jigarthanda", 
      para: "Double the Scoops, Double the Joy: Jumbo Jigarthanda Delight - a generous serving of happiness.", 
      img: pp1 
    },
    { 
      id: 4, 
      name: "Rainbow Falooda", 
      para: "Taste the spectrum of joy with our Rainbow Falooda - a vibrant and cheerful dessert.", 
      img: pp2 
    }
   ];

    return (

   <>
   
   {/* {herosection} */}

   <section className='hero-sec d-flex align-items-center py-5'>
         <div className='container'>
            <div className='row align-items-center g-5'>
                
               <div className='col-lg-6'>
                    <div className='hero-content'>
                        <h5 className='hero-header'>Welcome to Jigar Blast</h5>
                        <h1 className='hero-title' data-aos="fade-up">Experience The <br /> <span>Real Blast</span> of Madurai.</h1>
                         <p className='hero-para mb-5' data-aos="fade-right" data-aos-delay="200">
                        Indulge in the creamy, chilled, and authentic taste of our signature Jigarthanda. 
                        Made with traditional recipes and a modern twist to satisfy your soul.
                         </p>
                         <div className='hero-btns'>
                           <Link to="/product">
                           <button className='btn-main shadow'>Explore Menu</button>
                           </Link>
                           <Link to="/product">
                           <button className='btn-sub'>Visit Store</button>
                           </Link>
                         </div>
                    </div>
               </div>

              <div className='col-lg-6' data-aos="zoom-in" data-aos-delay="400">
                <div className='hero-image text-center'>
                    <img src={heroimg} alt="delicious-jigarthana" className='img-fluid' />
                </div>
              </div>

            </div>
         </div>
   </section>

   {/* {product section} */}

   <section className='prod-sec py-5'>
        <div className='container'>

           <div className='row mb-5 text-center'>
                  <div className='col-12'>
              <h2 className='section-title' data-aos="fade-up">Our Signature <span>Blasts</span></h2>
              <p className='section-subtitle'>Handcrafted sweetness served chilled just for you</p>
                 </div>
           </div>

           <div className='row g-4'>
              {products.map( (item) => (
                <div className='col-lg-3 col-md-6' key={item.id} data-aos="fade-up" data-aos-delay={item.id * 50}>
                <div className='prod-card'>
                  <div className='prod-img-box'>
                    <img src={item.img} alt={item.name} className='img-fluid' />
                  </div>
                  <div className='prod-info'>
                    <h4>{item.name}</h4>
                    <p>{item.para}</p>
                    <Link to="/product" className='order-link'>Order Now <i className="bi bi-arrow-right"></i></Link>
                  </div>
                </div>
              </div>
              ))}
           </div>

        </div>
   </section>

   {/* {aboutsection} */}

   <section className='about-sec py-5'>
        <div className='container'>
          <h2 className='section-title'>Who We Are</h2>
            <div className='row'>

               <div className='col-lg-6 col-12'>
                    <div className='about-text text-center'>
                        <p className='about-para' data-aos="fade-right">
                          Jigar Blast is more than just a dessert shop; it's a celebration of Madurai's 
    iconic flavors. Our journey started with a simple mission: to bring the 
    authentic, creamy, and refreshing taste of traditional Jigarthanda to 
    everyone. We use only the finest natural ingredients to ensure that 
    every sip gives you a "Real Blast" of happiness.
                        </p>
                    </div>
               </div>

               <div className='col-lg-6 col-12' data-aos="zoom-in-up">
                     <div className='about-image'>
                        <img src={aboutimg} alt="jigar" className='img-fluid about-im' />
                     </div>
               </div>

               <div className='butt'>
                  <Link to="/about" className='about-but'><button className='about-button'>Read More About Us</button></Link>
               </div>

            </div>
        </div>
   </section>

   {/* {testimonialsection} */}

   <section className='testi-sec py-5' data-aos="fade-up">
       <div className='container'>
        <div className='row mb-5 text-center'>
          <div className='col-12'>
        <h2 className='section-title'>Customer <span>Voices</span></h2>
        <p className='section-subtitle'>What our Jigar Blast lovers have to say</p>
      </div>
      </div>
      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
      
      <div className="carousel-item active">
          <div className='testi-content text-center'>
            <div className='quote-icon'><i className="bi bi-quote"></i></div>
            <p className='testi-para'>The most authentic Madurai Jigarthanda I've had in years! The creaminess is just perfect, and the flavors take me back to my childhood.</p>
            <h5 className='customer-name'>- Rajesh Kumar</h5>
            <div className='stars'>
              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className='testi-content text-center'>
            <div className='quote-icon'><i className="bi bi-quote"></i></div>
            <p className='testi-para'>Jumbo Jigarthanda is a must-try! The double scoop ice cream makes it a complete meal of happiness. Highly recommended!</p>
            <h5 className='customer-name'>- Priya Dharshini</h5>
            <div className='stars'>
              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i>
            </div>
          </div>
        </div>

        <div className="carousel-item">
          <div className='testi-content text-center'>
            <div className='quote-icon'><i className="bi bi-quote"></i></div>
            <p className='testi-para'>The Basundhi fusion is a brilliant twist. Jigar Blast has definitely mastered the art of balancing sweetness and tradition.</p>
            <h5 className='customer-name'>- Suresh</h5>
            <div className='stars'>
              <i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-fill"></i><i className="bi bi-star-half"></i>
            </div>
          </div>
        </div>

      </div>
      
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
</div>
   </section>

   {/* {statsection} */}

   <section className='stat-sec py-5'>
        <div className='container'>
            <div className='row g-4'>
                
               <div className='col-md-3 col-6' data-aos="zoom-in">
                   <div className='stat-box'>
                    <h2 className='stat-number'>50K+</h2>
                    <p className='stat-text'>Happy Customers</p>
                </div>
               </div>

               <div className='col-md-3 col-6' data-aos="zoom-in" data-aos-delay="100">
                <div className='stat-box'>
                    <h2 className='stat-number'>15+</h2>
                    <p className='stat-text'>Outlets in TN</p>
                </div>
            </div>

            <div className='col-md-3 col-6' data-aos="zoom-in" data-aos-delay="200">
                <div className='stat-box'>
                    <h2 className='stat-number'>20+</h2>
                    <p className='stat-text'>Expert Chefs</p>
                </div>
            </div>

            <div className='col-md-3 col-6' data-aos="zoom-in" data-aos-delay="300">
                <div className='stat-box'>
                    <h2 className='stat-number'>100%</h2>
                    <p className='stat-text'>Natural Milk</p>
                </div>
            </div>

            </div>
        </div>
   </section>

   </>

    );
}

export default Home;