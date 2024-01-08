import React from 'react';
import OurStory from "../ourstory/OurStory";
import ViewMenu from "../viewmenu/ViewMenu";
import OurMenu from "../ourmenu/OurMenu";
import Offers from "../offers/Offers";
import Chef from '../ourchef/Chef';
import Recipes from '../special-recipe/Recipes';
import Reservation from '../reservation/Reservation';
import Footer from '../footer/Footer';
import Reviews from '../reviews/Reviews';
import MenuSlider from '../menu-slider/MenuSlider';
import HomeBanner from '../home-banner/HomeBanner';
import Header from '../header/Header';

const Home = () => {
    return (
        <>
        <Header />
             <HomeBanner />
            <OurStory />
            <ViewMenu />
            <Reviews />
            <OurMenu />
            <Reservation />
            <Offers />
            <MenuSlider />
            <Chef />
            <Recipes />
            <Footer />
        </>
    )
}
export default Home;