import React from 'react';
// import NavLink from 'react-router-dom';
import './viewmenu.css';
import img3 from '../../assets/images/img3.png';
import img4 from '../../assets/images/img4.png';

const ViewMenu = () => {
    return (
        <>
          <div className='vw-menu-bg'>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-3">
                        <div>
                        <p className='subheading'>TASTY AND CRUNCHY</p>
                        <h3 className='main-heading'>INGREDIENTS</h3>
                        <p className='heading-para-fnt ing-para'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minima nisi tempore dignissimos odit reprehenderit magnam, reiciendis atque voluptates hic voluptatem doloremque porro laborum inventore?</p>

                        <div className="button_slide slide_right">VIEW OUR MENU</div>
                        </div>
                    </div>
                    <div className="col-md-6 mt-3">
                    <div className='ing-box-img'>
                    <img src={img4} alt="img" className='stroy-img'/>
                    </div>
                    </div>
                    
                </div>
            </div>
          </div>
        </>
    )
}
export default ViewMenu;