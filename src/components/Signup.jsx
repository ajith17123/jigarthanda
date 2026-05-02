import '../assets/style/Signup.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Signup () {
    return (

   <section className='signup-sec py-5'>
         <div className='container'>
            <h2 className='section-title'>Join Our Jigar Blast</h2>
               <div className='row justify-content-center'>
                    
                 <div className='col-lg-5 col-md-8 col-12' data-aos="zoom-in">
                        <div className='sign-card'>

                            <div className='text-center mb-4'>
                                <h2 className='title'>Create Account</h2>
                                <p className='sub-para'>Start your sweet journey with us today!</p>
                            </div>

                            <form>
                                <div className='mb-3'>
                                    <label className='form-label'>Full Name</label>
                                    <input type="text" className='form-control' placeholder='Enter your name' required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Email Address</label>
                                    <input type="email" className='form-control' placeholder='Enter your mail' required />
                                </div>

                                <div className='mb-3'>
                                    <label className='form-label'>Create Password</label>
                                    <input type="password" className='form-control' placeholder='Enter password' required />
                                </div>

                                <div className='mb-4'>
                                    <label className='form-label'>Confirm Password</label>
                                    <input type="password" className='form-control' placeholder='Re-enter password' required />
                                </div>

                                <button className='btn btn-signup w-100 mb-3'>Sign Up</button>

                                <div className='text-center mt-3'>
                                    <p className='sign-para'>Already have an account? <Link to="/login" className='login-link'>Login</Link></p>
                                </div>
                            </form>

                        </div>
                 </div>

               </div>
         </div>
   </section>

    )
}

export default Signup;