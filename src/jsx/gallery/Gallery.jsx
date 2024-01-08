import React from "react";
import "./gallery.css";
import cake from "../../assets/images/image1.jpg";
import img1 from "../../assets/images/image2.jpg";
import img2 from "../../assets/images/image3.jpg";
import img3 from "../../assets/images/image4.jpg";
import img4 from "../../assets/images/image5.jpg";
import img5 from "../../assets/images/image6.jpg";
import Footer from '../footer/Footer';
import Header from '../header/Header';

const Gallery = () => {
  return (
    <>
    <Header />
    <GalleryBanner />
      <div className="container mb-5">
        <div className="row">
          <GalleryImage image={img1} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img2} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img3} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img4} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img5} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={cake} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img1} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img2} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img3} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img4} title="Easy Recipe" details="Recipe" />

          <GalleryImage image={img5} title="Easy Recipe" details="Recipe" />
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Gallery;

const GalleryBanner = () => {
  return (
    <>
    <div className="gallery-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">GALLERY</h5>
    </div>
    </>
  )
}

const GalleryImage = (props) => {
  return (
    <>
      <div className="col-md-4 mt-4">
        <div className="content" style={{cursor:'pointer'}}>
          <div className="content-overlay"></div>
          <div className="">
            <img className="menu-image" src={props.image} alt="menu image" />
          </div>
          <div className="content-details fadeIn-bottom">
            <h6 className="content-title">{props.title}</h6>
            <p className="content-text">{props.details}</p>
          </div>
        </div>
      </div>
    </>
  );
};
