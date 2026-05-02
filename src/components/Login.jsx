import '../assets/style/Login.css';
import { Link } from 'react-router-dom';
import {NavHashLink} from 'react-router-hash-link';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Login () {
    return (

   <section className='login-sec py-5'>
       <div className='container'>
        <h2 className='section-title'>Welcome To Jigar World</h2>
            <div className='row justify-content-center'>
                    
                <div className='col-lg-5 col-md-7 col-12' data-aos="zoom-in">
                    <div className='login-card'>
                        
                       <div className='text-center mb-4'>
                           <h2 className='title'>Login To Jigar Blast</h2>
                           <p className='sub-para'>Welcome back! Please login to your account.</p>
                       </div>

                       <form>
                        <div className='mb-4'>
                            <input type="text" className='form-control' placeholder='Enter Mobile No. Or Email Id' required />
                        </div>
                        <button className='btn btn-login w-100 mb-4'>Login</button>
                        <div className='divider d-flex align-items-center mb-4'>
                            <span className='text-muted'>Or Login Using</span>
                                </div>

                                <div className='social-login d-flex gap-3 mb-4'>
                                    <button className='btn btn-icon w-100 d-flex align-items-center justify-content-center gap-2'>
                                        <i className="bi bi-google"></i> Google
                                    </button>
                                    <button className='btn btn-icon w-100 d-flex align-items-center justify-content-center gap-2'>
                                        <i className="bi bi-facebook"></i> Facebook
                                    </button>
                                </div>

                                <div className='text-center mt-3'>
                                    <p className='mb-0'>New Here? <Link to="/signup" className='signup-link'>Sign Up</Link></p>
                                </div>
                       </form>

                    </div>
                </div>

            </div>
       </div>
   </section>

    )
}

export default Login;