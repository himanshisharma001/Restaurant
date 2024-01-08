import React from 'react';
import './footer.css';
import logo from '../../assets/images/logo.png';

const Footer = () => {
    return (
        <>
           
             <footer className='footer-bg'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4 text-center mt-4">
                            {/* <h6 className='ftr-list'>TWITTER FEED</h6> */}
                            <h6 className='ftr-list'>PRIVACY POLICY</h6>
                            <h6 className='ftr-list mt-2'>Terms & Conditions</h6>
                        </div>
                        <div className="col-md-4 text-center">
                            <div className='ftr-logo-box'>
                                <img src={logo} alt="logo" className='ftr-lg-img' />
                            </div>

                            <h6 className='ftr-para-fnt'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</h6>
                           <p className='ftr-para-fnt mt-2'>+387648592568</p>
                           <p className='ftr-para-fnt'>savory@qodeinteractive.com</p>
                           <p className='ftr-para-fnt'>Eighth Avenue 487, New York</p>
                           <div>
                           <i className="bi bi-twitter ftr-icon"></i>
                           <i className="bi bi-instagram ftr-icon ms-3"></i>
                           <i className="bi bi-facebook ftr-icon ms-3"></i>
                           <i className="bi bi-pinterest ftr-icon ms-3"></i>
                           <i className="bi bi-whatsapp ftr-icon ms-3"></i>
                           </div>
                        </div>
                        <div className="col-md-4 text-center mt-4">
                            <h6 className='ftr-list'>INSTAGRAM FEED</h6>
                            <h6 className='ftr-list mt-2'>TWITTER FEED</h6>
                        </div>
                    </div>

                    <div className='cpy-line'></div>
                    <p className='cpy-fnt-sz'>@2023,  All Rights Reserved</p>
                </div>
             </footer>
          
        </>
    )
}

export default Footer;