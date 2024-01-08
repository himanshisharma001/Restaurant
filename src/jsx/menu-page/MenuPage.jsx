import React from 'react';
import './menu-page.css';
import OurMenu from "../ourmenu/OurMenu";
import Offers from "../offers/Offers";
import Reviews from '../reviews/Reviews';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const MenuPage = () => {
    return (
        <>
        <Header />
        <MenuBanner />
            <OurMenu />
            <Offers />
            <Reviews />
            <Footer />
        </>
    )
}

export default MenuPage;


const MenuBanner = () => {
    return (
      <>
      <div className="menu-banner-box">
           <h5 className="text-center blg-bnr-fnt-sz">OUR MENU</h5>
      </div>
      </>
    )
  }
