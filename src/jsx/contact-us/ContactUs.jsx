import React from 'react';
import './contactus.css';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const ContactUs = () => {
    return (
        <>
        <Header />
        <ContactBanner />
           <div className='our-specl-bg'>
             <div className="container">
                <div className="row">
                    <div className="col-md-6">
                       <ContactDetails title="CONTACT US" subtitle="Lorem, ipsum dolor sit amet consectetur adipisicing elit."/>
                    </div>
                    <div className="col-md-6">
                        <ContactForm />
                    </div>
                </div>
             </div>
           </div>

           <div className='cnt-map-prlx'>
           <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227748.4360211611!2d75.62574274340832!3d26.885421392086815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c4adf4c57e281%3A0xce1c63a0cf22e09!2sJaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1703317889907!5m2!1sen!2sin" width="100%" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
           </div>

           <Footer /> 
        </>
    )
}

export default ContactUs;

const ContactBanner = () => {
  return (
    <>
    <div className="contact-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">CONTACT US</h5>
    </div>
    </>
  )
}

const ContactDetails = (props) => {
    return (
        <>
          <h3 className='main-heading pt-3'>{props.title}</h3>
              <p className='heading-para-fnt mb-4'>{props.subtitle}</p>
                
             
              <div className='d-flex mt-2 justify-content-between'>
              <p className='cnt-dtl-name'>PHONE</p>
              <p className='cnt-dtl-main-nm'>+387648586578</p>
              </div>

              <div className='d-flex mt-2 justify-content-between'>
                <p className='cnt-dtl-name'>EMAIL</p>
                <p className='cnt-dtl-main-nm'>himanshirajanisharma@gmail.com</p>
              </div>

              <div className='d-flex mt-2 justify-content-between'>
                <p className='cnt-dtl-name'>ADDRESS</p>
                <p className='cnt-dtl-main-nm'>Jaipur, Rajasthan</p>
              </div>

              <div className='d-flex mt-2 justify-content-between'>
                <p className='cnt-dtl-name'>FOLLOW</p>
               <div>
               <i className="bi bi-facebook cnt-icn-vw"></i>
               <i className="bi bi-instagram cnt-icn-vw ms-2"></i>
               <i className="bi bi-twitter-x cnt-icn-vw ms-2"></i>
               <i className="bi bi-whatsapp cnt-icn-vw ms-2"></i>
               </div>
              </div>
        </>
    )
}

export {ContactDetails};

const ContactForm = () => {
    return (
        <>
          <form action="">
             <input type="text" placeholder='NAME*' className='frm-input-box mt-2' />
             <input type="email" placeholder='E-MAIL*' className='frm-input-box mt-2' />
             <textarea name="" id="" cols="20" rows="5" className='frm-input-box mt-2' placeholder='MESSAGE*'></textarea>
          
             <div className="cnt-btn-vw">CONTACT US</div>
          </form>
        </>
    )
}