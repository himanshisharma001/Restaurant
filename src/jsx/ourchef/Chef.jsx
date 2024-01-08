import React from 'react';
import './chef.css';
import chef from '../../assets/images/chef.png';

const Chef = () => {
    return (
        <>
   <div className='our-chef-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div>
                        <p className='subheading'>TASTY AND CRUNCHY</p>
                        <h3 className='main-heading'>OUR CHEF</h3>
                        <p className='heading-para-fnt ing-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minima nisi tempore dignissimos odit reprehenderit magnam, reiciendis atque voluptates hic voluptatem doloremque porro laborum inventore?</p>

                        <div className="button_slide slide_right">VIEW OUR MENU</div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                    <div className=''>
                    <img src={chef} alt="img" className='stroy-img'/>
                    </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </>
    )
}
export default Chef;

