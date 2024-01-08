import React from 'react';
import './review.css';
// import Carousel from 'react-bootstrap/Carousel';
import user1 from '../../assets/images/user1.jpg';
import user2 from '../../assets/images/user2.jpg';
import user3 from '../../assets/images/user3.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const Reviews = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, 
      };
    return (
        <>
           <div className='parallax2'>
           <div className='carousel-container'>
           <Slider {...settings}>
        <div>
          <ReviewsData image={user1} user="MARK HOPKINS"/>
        </div>
        <div>
          <ReviewsData image={user2} user="EMA WAYNS"/>
        </div>
        <div>
          <ReviewsData image={user3} user="CHARLIE JOE"/>
        </div>
      </Slider>
           </div>
          
           </div>
        </>
    )
}
export default Reviews;

const ReviewsData = (props) => {
    return (
        <>
        <div className='text-center'>
        <div className='user-box-img'><img src={props.image} className='revw-img-vw'/></div>
        <p className='revw-cmt-vw'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugit amet maxime ad facilis at modi, eius inventore harum fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor sint ab mollitia, atque modi similique!</p>
       
        <h6 className='revw-user-name'>{props.user}</h6>
        </div>
      
        </>
    )
}