import React from 'react';
import './home-banner.css';
import banner1 from '../../assets/images/banner1.jpg';
import banner2 from '../../assets/images/banner2.jpg';
import banner3 from '../../assets/images/banner3.jpg';
import banner4 from '../../assets/images/banner4.jpg';
import banner5 from '../../assets/images/banner5.jpg';

const HomeBanner = () => {
    return (
        <>
           <div className="">
  <div id="mainBanner" className="carousel slide" data-bs-ride="carousel" data-bs-pause="false">
    <div className="carousel-inner">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="2" aria-label="Slide 3"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="3" aria-label="Slide 4"></button>
        <button type="button" data-bs-target="#mainBanner" data-bs-slide-to="4" aria-label="Slide 5"></button>
      </div>
      <div className="carousel-item active" data-bs-interval="7000">
        <img src={banner1} className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>RESTAURANT</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW OUR MENU</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src={banner3} className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>RESTAURANT</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW OUR MENU</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src={banner2} className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>RESTAURANT</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW OUR MENU</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src={banner4} className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>RESTAURANT</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW OUR MENU</div>
          </div>
        </div>
      </div>
      <div className="carousel-item" data-bs-interval="7000">
        <img src={banner5} className="d-block w-100" alt="..." />
        <div className="carousel-caption banner-caption-vw">
          <h5>RESTAURANT</h5>
          <hr className="bg-light border-4 border-top border-light" />
          <p>Lorem ipsum dolor sit amet, consectetur elit. Eligendi,<br/> quis tempore aliquam dolor earum </p>
          <div className="banner-btn">
          <div className="button_slide slide_right">VIEW OUR MENU</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        </>
    )
}

export default HomeBanner;