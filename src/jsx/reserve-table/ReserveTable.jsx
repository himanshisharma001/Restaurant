import React from 'react';
import './reserve-table.css';
import {ContactDetails} from '../contact-us/ContactUs';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const ReserveTable = () => {
    return (
        <>
        <Header />
        <ReserveBanner />
        <div className='our-specl-bg'>
          <div className="container">
          <div className='text-center'>
              <p className='subheading pt-3'>SOFTLY AND CRUNCHY</p>
              <h3 className='main-heading'>Book a Table</h3>
              <p className='heading-para-fnt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sed do eiusmod tempor incidition ullamco laboris nisi ut aliquip exnea.</p>
            </div>
          <BookTable />
            <div className="row mt-4">
        
            <div className="col-md-6 mt-4 mb-3">
                 <AboutReservation />
            </div>
                <div className="col-md-6 mt-4 mb-3">
                    <ContactDetails title="Call Center Reservation" subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium, totam rem aperiam perspiciatis unde omnis."/>
                </div>
            </div>
          </div>
        </div>

        <Footer />
        </>
    )
}
export default ReserveTable;

const ReserveBanner = () => {
    return (
      <>
      <div className="reserve-banner-box">
           <h5 className="text-center blg-bnr-fnt-sz">RESERVATION</h5>
      </div>
      </>
    )
  }

const AboutReservation = () => {
    return (
        <>
 <h3 className='main-heading pt-3'>About Reservation</h3>
 <p className='heading-para-fnt mb-4'>Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium dolor emque laudantium, totam rem aperiam perspiciatis unde omnis.</p>
 <p className="rep-para-hdg">Sed ut perspiciatis unde omnis iste natus error sit voluptaaccusantium doloremque laudan tium, totam rem aperiam perspiciatis unde omnis iste natus error sit volupta Sed ut perspici atis unde omnis iste natus error sit voluptaaccusantium doloremque laudantium, totam rem aperiam perspiciatis unde omnis iste natus error sit volupta.</p>
        </>
    )
}

const BookTable = () => {
    return (
        <>
         <form action="">
            <div className="row">
                <div className="col-md-4 mt-3">
                    <select name="" id="" className='frm-input-box'>
                        <option value="1">1 Person</option>
                        <option value="2">2 Person</option>
                        <option value="3">3 Person</option>
                        <option value="4">4 Person</option>
                        <option value="5">5 Person</option>
                        <option value="6">6 Person</option>
                        <option value="7">7 Person</option>
                        <option value="8">8 Person</option>
                        <option value="9">9 Person</option>
                        <option value="10">10 Person</option>
                    </select>
                </div>

                <div className="col-md-4 mt-3">
                <input type="date" className='frm-input-box' />
                </div>
                <div className="col-md-4 mt-3">
                <input type="time" className='frm-input-box' />
                </div>
                <div className="col-md-12 mt-3">
                <div className='text-center'><button className="cnt-btn-vw">CONTACT US</button></div>
                <p className="pwr-fnt-sz text-center mt-3">POWERED BY OPENTABLE</p>
                </div>
            </div>
           
         </form>
        </>
    )
}