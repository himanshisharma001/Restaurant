import React from "react";
import "./recipes.css";
import cake from '../../assets/images/cake.jpg';
import itpasta from '../../assets/images/itpasta.jpg';
import sppasta from '../../assets/images/sppasta.jpg';

const Recipes = () => {
  return (
    <>
      <div className="recipe-box-vw">
        <p className="subheading text-center">TASTY AND CRUNCHY</p>
        <h3 className="main-heading text-center">SPECIAL RECIPES</h3>
        <p className="heading-para-fnt text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. <br />
          Nemo minima nisi tempore dignissimos odit reprehenderit magnam,
          reiciendis atque <br />
          voluptates hic voluptatem doloremque porro laborum inventore?
        </p>

        <div className="container">
            <div className="row">
              <RecipeBox image={itpasta} title="ITALIAN FAMOUS PASTA WITH MEAT AND CHEESE"/>
              <RecipeBox image={cake} title="CHOCOLATE TRUFFLE CAKE WITH HONEY FLAVOR"/>
              <RecipeBox image={sppasta} title="CHICKEN SOUP WITH SPRING VEGGIES AND PASTA"/>
            </div>
        </div>
      </div>
    </>
  );
};
export default Recipes;

const RecipeBox = (props) => {
    return (
        <>
            <div className="col-md-4 mt-4">
            <div className="rep-main-box">
              <div className="rep-img-box">
                <img src={props.image} alt="image" className="stroy-img" />
              </div>
              <p className="rep-sm-date">APRIL 11, 2016 / HEALTHY</p>
              <h6 className="rep-main-hdg">{props.title}</h6>
              <p className="rep-para-hdg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis....</p>
            
              <p className="cmt-name">1 COMMENT</p>
              <div className="btm-line"></div>
              </div>
            </div>
        </>
    )
}

export {RecipeBox};