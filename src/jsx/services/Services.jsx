import React from "react";
import "./services.css";
import { RecipeBox } from "../special-recipe/Recipes";
import cake from "../../assets/images/cake.jpg";
import itpasta from "../../assets/images/itpasta.jpg";
import sppasta from "../../assets/images/sppasta.jpg";
import { MainMenu } from "../ourmenu/OurMenu";
import fresh from "../../assets/images/fresh.png";
import snacks from "../../assets/images/snacks.png";
import ingredients from "../../assets/images/ingredients.png";
import celebrations from "../../assets/images/celebrations.png";
import foodbox from '../../assets/images/foodbox.png';
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Services = () => {
  return (
    <>
    <Header />
    <ServiceBanner />
      <div className="our-specl-bg">
        <div className="container">
          <p className="subheading text-center mt-3">TASTY AND CRUNCHY</p>
          <h3 className="main-heading text-center">
            <b>Stunning Things</b>
          </h3>
          <p className="heading-para-fnt text-center">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
            Nemo minima nisi tempore dignissimos odit reprehenderit magnam,
            reiciendis atque <br />
            voluptates hic voluptatem doloremque porro laborum inventore?
          </p>
          <div className="row">
            <MainMenu image={fresh} title="FRESH RECIPES" />
            <MainMenu image={snacks} title="PARTY SNACKS" />
            <MainMenu image={celebrations} title="CELEBRATIONS" />
            <MainMenu image={ingredients} title="INGREDIENTS" />
          </div>
        </div>
      </div>

      <FoodTake />
      <StoryService />
      <Footer />
    </>
  );
};

export default Services;


const ServiceBanner = () => {
  return (
    <>
    <div className="service-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">SERVICES</h5>
    </div>
    </>
  )
}

const StoryService = () => {
  return (
    <>
      <div className="recipe-box-vw">
        <p className="subheading text-center">TASTY AND CRUNCHY</p>
        <h3 className="main-heading text-center">
          <b>Our Story</b>
        </h3>
        <p className="heading-para-fnt text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Nemo minima nisi tempore dignissimos odit reprehenderit magnam,
          reiciendis atque <br />
          voluptates hic voluptatem doloremque porro laborum inventore?
        </p>
        <div className="container">
          <div className="row">
            <RecipeBox image={sppasta} title="SPRING VEGGIES AND PASTA" />
            <RecipeBox image={cake} title="CHOCOLATE CAKE" />
            <RecipeBox image={itpasta} title="ITALIAN FAMOUS PASTA" />
          </div>
        </div>
      </div>
    </>
  );
};

const FoodTake = () => {
  return (
    <>
      <div className="foodtake-bg">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-4 mb-5">
              <p className="subheading text-white">TASTY AND CRUNCHY</p>
              <h3 className="main-heading text-white">
                <b>Take Away Food</b>
              </h3>
              <p className="heading-para-fnt text-white">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
                Nemo minima nisi tempore dignissimos odit reprehenderit magnam,
                reiciendis atque <br />
                voluptates hic voluptatem doloremque porro laborum inventore?
              </p>
              <div className="button_slide slide_right">VIEW OUR MENU</div>
            </div>

            <div className="col-md-6 mt-4 mb-5">
                <div className="text-center">
                    <img src={foodbox} alt="food-box" className="" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
