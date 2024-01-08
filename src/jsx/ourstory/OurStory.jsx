import React from 'react';
import './ourstory.css';
import img1 from '../../assets/images/img1.jpg';
import img2 from '../../assets/images/img2.jpg';

const OurStory = () => {
    return (
        <>
            <div className='our-story-bg'>
            <div className="container">
            <div className='text-center'>
              <p className='subheading'>TASTY AND CRUNCHY</p>
              <h3 className='main-heading'>OUR STORY</h3>
              <p className='heading-para-fnt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minima nisi tempore dignissimos odit reprehenderit magnam, reiciendis atque voluptates hic voluptatem doloremque porro laborum inventore?</p>
            </div>

            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-5 mt-3">
                    <div className='story-img-box'>
                        <img src={img1} alt="image" className='stroy-img' />
                    </div>
                </div>
                <div className="col-md-5 mt-3">
                <div className='story-img-box'>
                        <img src={img2} alt="image" className='stroy-img' />
                    </div>
                </div>
                <div className="col-md-1"></div>
            </div>
            </div>
            </div>
        </>
    )
}

export default OurStory;