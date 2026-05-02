import '../assets/style/Product.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';
import p1 from '../assets/images/p1.jpg';
import p2 from '../assets/images/p2.jpg';
import p3 from '../assets/images/p3.jpg';
import p4 from '../assets/images/p4.jpg';
import p5 from '../assets/images/p5.jpg';
import p6 from '../assets/images/p6.jpg';


function Product () {

   const menuItems = [
        { id: 1, name: "Classic Jigarthanda", price: "₹60", desc: "The authentic Madurai taste with handmade ice cream.", img: p1 },
        { id: 2, name: "Basundi Jigarthanda", price: "₹90", desc: "Extra creamy layers of basundi for a rich blast.", img: p2 },
        { id: 3, name: "Special Jigar Blast", price: "₹120", desc: "Loaded with nuts, malai, and our secret ingredients.", img: p3 },
        { id: 4, name: "Chocolate Jigar", price: "₹100", desc: "Traditional base with a modern chocolate twist.", img: p4 },
        { id: 5, name: "Mango Jigarthanda", price: "₹110", desc: "Seasonal mango pulp blended with creamy goodness.", img: p5 },
        { id: 6, name: "Kulfi Mix Jigar", price: "₹130", desc: "Topped with sliced kulfi for double the chill.", img: p6 }
    ];

    return (

   <section className='product-section py-5'>
            <div className='container'>
                <div className='text-center mb-5'>
                    <h2 className='section-title' data-aos="fade-down">Our Delicious Menu</h2>
                    <p className='sub-title' data-aos="fade-up">Handcrafted with love and Madurai's tradition.</p>
                </div>

                <div className='row g-4'>
                    {menuItems.map((item, index) => (
                        <div className='col-lg-4 col-md-6 col-12' key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className='product-card'>
                                <div className='img-box'>
                                    <img src={item.img} alt={item.name} className='img-fluid' />
                                    <span className='price-tag'>{item.price}</span>
                                </div>
                                <div className='content-box p-4 text-center'>
                                    <h4 className='item-name'>{item.name}</h4>
                                    <p className='item-desc text-muted'>{item.desc}</p>
                                    <button className='btn btn-order'>Order Now</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}

export default Product;