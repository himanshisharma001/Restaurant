import React from "react";
import "./blog.css";
import Footer from "../footer/Footer";
import foodimg1 from "../../assets/images/foodimg1.png";
import foodimg2 from "../../assets/images/foodimg2.png";
import foodimg3 from "../../assets/images/foodimg3.png";
import image1 from '../../assets/images/image1.jpg';
import image2 from '../../assets/images/image2.jpg';
import image3 from '../../assets/images/image3.jpg';
import image4 from '../../assets/images/image4.jpg';
import image5 from '../../assets/images/image5.jpg';
import image6 from '../../assets/images/image6.jpg';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { NavLink } from 'react-router-dom';
import Header from '../header/Header';

const Blog = () => {
  return (
    <>
    <Header />
    <BlogBanner />
      <div className="container mb-5">
        <div className="row">
          <BlogDetail
            image={foodimg1}
            title="Quick Trip With Friends To The City Of Light"
          />
           <BlogDetail
            image={foodimg2}
            title="Start The Day With Great Taste And Feel Fantastic"
          />
           <BlogDetail
            image={foodimg3}
            title="The Real Way To Do New York City In Summertime"
          />
           <BlogDetail
            image={image1}
            title="Working Hours Everyday The Same Happy Days"
          />
           <BlogDetail
            image={image2}
            title="Start The Day With Great Taste And Feel Fantastic"
          />
           <BlogDetail
            image={image3}
            title="Quick Trip With Friends To The City Of Light"
          />
            <BlogDetail
            image={image4}
            title="San Francisco Is Always a Good Idea To Getaway"
          />
          <BlogDetail
            image={image5}
            title="We Drink Coffee Everyday In Our Favorite Cafe"
          />
          <BlogDetail
            image={image6}
            title="Find Now The Answers To Your Sugar Questions"
          />
        </div>

        <div className="mt-4">
        <PaginationTab />
        </div>
      </div>

      
      <Footer />
    </>
  );
};
export default Blog;


const BlogBanner = () => {
  return (
    <>
    <div className="blog-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">BLOG</h5>
    </div>
    </>
  )
}


const BlogDetail = (props) => {
  return (
    <>
      <div className="col-md-4 mt-4">
      <NavLink to="/blogdetails" className='text-decoration-none'>
        <div className="blog-img-box">
          <img src={props.image} alt="image" className="img-fluid" />
        </div>
        <p className="rep-sm-date">APRIL 11, 2016 / HEALTHY</p>
        <h6 className="rep-main-hdg">{props.title}</h6>
        <p className="rep-para-hdg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque lauatium, totam rem aperiam perspiciatis unde
          omnis....
        </p>
        <p className="cmt-name mt-4">1 COMMENT</p>
        <div className="btm-line"></div>
        </NavLink>
      </div>
      
    </>
  );
};

const PaginationTab = () => {
    return (
        <>
   <Stack spacing={2}>
      <Pagination count={3} color="primary" />
    </Stack>
        </>
    )
}