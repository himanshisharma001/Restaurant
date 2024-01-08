import React from 'react';
import './reservation.css';


const Reservation = () => {
    return (
        <>
            <div className='parallax1'>
            <div className="container">
              <h6 className='resv-sm-hdg'>TASTY AND CRUNCHY</h6>
              <h5 className='resv-main-hdg'>RESERVATIONS</h5>
              <p className='para-resv-fnt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,<br /> sedolorm reminusto doeiusmod tempor incidition ulla mco laboris nisi ut<br /> aliquip ex ea commo condorico consectetur adipiscing elitut aliquip.</p>
            <form action="">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                       <input type="text" placeholder='NAME*' className='input-box-vw' />
                       <input type="date" className='input-box-vw' />
                       <input type="number" placeholder='SEATS*' className='input-box-vw' />
                    </div>
                    <div className="col-md-4">
                    <input type="tel" placeholder='PHONE*' className='input-box-vw' />
                       <input type="time" className='input-box-vw' />
                       <input type="email" placeholder='E-MAIL*' className='input-box-vw' />
                    </div>
                    <div className="col-md-2"></div>
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <textarea name="" id="" cols="20" rows="6" className='input-box-vw' placeholder='NOTES'></textarea>
                    </div>
                    <div className="col-md-2"></div>

                    <div className='text-center'><button className='res-btn-box'>RESERVE</button></div>
                </div>
                </form>
            </div>
               
            </div>
        </>
    )
}

export default Reservation;