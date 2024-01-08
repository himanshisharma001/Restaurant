import React from "react";
import "./blog.css";
import foodimg1 from "../../assets/images/foodimg1.png";
import foodimg2 from "../../assets/images/foodimg2.png";
import foodimg3 from "../../assets/images/foodimg3.png";
import Footer from "../footer/Footer";
import user from '../../assets/images/user.png';
import user1 from '../../assets/images/user2.jpg';
import post1 from '../../assets/images/post1.png';
import post2 from '../../assets/images/post2.png';
import post3 from '../../assets/images/post3.png';
import post4 from '../../assets/images/post4.png';
import healthyimg from '../../assets/images/healtyimg.png';
// import blogbanner from '../../assets/images/';
import Header from '../header/Header';

const BlogDetails = () => {
  return (
    <>
    <Header />
    <BlogDetailsBanner />
      <div className="container mb-4 mt-4">
        <div className="row">
          <div className="col-md-8 mt-4">
               <BlogData />
               <BlogUserPost />
               <PerviousNextPost />
               <div className="blog-btmline"></div>
               <CommentBoxForm />
          </div>
           
           {/* <div className="col-md-1"></div> */}
          <div className="col-md-4 mt-4">
            <AboutUserBox />
            <Categories />
           <LatestPosts />
           <HealthyImage />
           <FollowMe />
           <MyFeed />
           <TagsBox />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default BlogDetails;

const BlogDetailsBanner = () => {
  return (
    <>
    <div className="blog-new-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">BLOG DETAILS</h5>
    </div>
    </>
  )
}


const BlogData = () => {
  return (
    <>
         <div>
              <img src={foodimg2} alt="blog-image" className="img-fluid" />
            </div>
            <p className="rep-sm-date">APRIL 11, 2016 / HEALTHY</p>
            <h6 className="rep-main-hdg" style={{ fontSize: "25px" }}>
              Start The Day With Great Taste And Feel Fantastic
            </h6>
            <p className="rep-para-hdg">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best. They
              cannot foresee the pain and trouble that are bound to ensue and
              equal blame belongs.
            </p>
            <p className="rep-para-hdg mt-3">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, They
              cannot foresee the pain and trouble that are bound to ensue and
              equal blame belongs.
            </p>

            <p className="rep-para-hdg mt-3">
              On the other hand, we denounce with righteous indignation and
              dislike men who are so beguiled and demoralized by the charms of
              pleasure of the moment, so blinded by desire, that they cannot
              foresee the pain and trouble that are bound to ensue; and equal
              blame belongs to those who fail in their duty through weakness of
              will, which is the same as saying through shrinking from toil and
              pain. These cases are perfectly simple and easy to distinguish. In
              a free hour, when our power of choice is untrammelled and when
              nothing prevents our being able to do what we like best, They
              cannot foresee the pain and trouble that are bound to ensue and
              equal blame belongs.
            </p>

            <div className="d-flex justify-content-end">
             <p className="rep-sm-date">SHARE:</p>
             <i className="bi bi-facebook ms-2 blg-share-in"></i>
             <i className="bi bi-instagram ms-2 blg-share-in"></i>
             <i className="bi bi-twitter-x ms-2 blg-share-in"></i>
             <i className="bi bi-whatsapp ms-2 blg-share-in"></i>
             <p className="rep-sm-date ms-2">2 COMMENTS</p>
            </div>
    </>
  )
}


const BlogUserPost = () => {
  return (
    <>
       <div className="blog-user-box">
         <div className="user-main-vw-box">
         <div className="text-center"><img src={user} alt="user" className="stry-img" /></div>
           
           <div className="user-data-dtl">
            <h6 className="user-name-hdg">MARINE WILLIAMS</h6>
            <p className="user-dtl-paraa">On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment.</p>
           
            <div className="d-flex">
             <p className="rep-sm-date">FOLLOW:</p>
             <i className="bi bi-facebook ms-2 blg-share-in"></i>
             <i className="bi bi-instagram ms-2 blg-share-in"></i>
             <i className="bi bi-twitter-x ms-2 blg-share-in"></i>
             <i className="bi bi-whatsapp ms-2 blg-share-in"></i>
           
            </div>
           </div>
         </div>
       </div>
    </>
  )
}

const PerviousNextPost = () => {
  return (
    <>
      <div className="user-main-vw-box mt-4 mb-4">

      <div className="d-flex">
        <div className="post-pre-nxt-box"><img src={foodimg1} alt="post" className=""/></div>

        <div className="ms-3 mt-3"  style={{cursor:'pointer'}}>
          <h6 className="user-name-hdg">FRESH CROISSANTS ARE BEST FOR BREAKFAST</h6>
          <p className="user-dtl-paraa">PREVIOUS POST</p>
        </div>
      </div>

      <div className="d-flex">
      <div className="mt-3"  style={{cursor:'pointer'}}>
          <h6 className="user-name-hdg">DOROTHY DAY</h6>
          <p className="user-dtl-paraa">NEXT POST</p>
        </div>
        <div className="post-pre-nxt-box ms-3"><img src={foodimg3} alt="post" className=""/></div>

       
      </div>

      </div>
    </>
  )
}

const CommentBoxForm = () => {
  return (
    <>
     <h3 className="cmt-heading-fnt">Leave a Comment</h3>
     <form action="" className="mb-4 mt-3">
      <textarea name="" id="" cols="20" rows="6" className="cmt-frm-input" placeholder="WRITE YOUR COMMENT HERE..."></textarea>
      <input type="text" className="cmt-frm-input" placeholder="YOUR FULL NAME"/>
      <input type="email" className="cmt-frm-input" placeholder="E-MAIL ADDRESS"/>
      <input type="url" className="cmt-frm-input" placeholder="WEBSITE"/>
      <div className="cnt-btn-vw">POST COMMENT</div>
     </form>
    </>
  )
}

const AboutUserBox = () => {
  return (
    <>
     <h3 className="cmt-heading-fnt">About Me</h3>
     <div className="blog-btmline"></div>

     <div className="about-user-img-box mt-4">
      <img src={user1} alt="user" className="about-user-img" />
     </div>
     <p className="user-dtl-paraa mt-4">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis.</p>
      <p className="user-dtl-paraa" style={{cursor:'pointer'}}>Read More</p>
    </>
  )
}

const Categories = () => {
  return (
    <>
 <h3 className="cmt-heading-fnt mt-5">Categories</h3>
     <div className="blog-btmline"></div>
     <div className="mt-4" style={{cursor:'pointer'}}>
     <p className="user-dtl-paraa">STARTERS</p>
     <p className="user-dtl-paraa">SNACKS</p>
     <p className="user-dtl-paraa">TRAVEL</p>
     <p className="user-dtl-paraa">LIVING</p>
     <p className="user-dtl-paraa">FOOD</p>
     <p className="user-dtl-paraa">RECIPES</p>
     <p className="user-dtl-paraa">HEALTHY</p>
     </div>
    </>
  )
}

const LatestPosts = () => {
  return (
    <>
<h3 className="cmt-heading-fnt mt-5">Latest Posts</h3>
     <div className="blog-btmline"></div>
     <LatestPostDetail image={post1} date="NOVEMBER 24, 2023" heading="Dinner For Two"/>
     <LatestPostDetail image={post2} date="NOVEMBER 30, 2023" heading="Italian Romantic Meals"/>
     <LatestPostDetail image={post3} date="DECEMBER 5, 2023" heading="Nutrition Top Tips"/>
     <LatestPostDetail image={post4} date="DECEMBER 15, 2023" heading="Snack Delicious Ideas"/>
    </>
  )
}

const LatestPostDetail = (props) => {
  return (
    <>
      <div className="d-flex mt-3" style={{cursor:'pointer'}}>
       <div className="lst-pst-img-box"><img src={props.image} alt="post-image" /></div>
       <div className="ms-2">
       <p className="rep-sm-date">{props.date}</p>
       <p className="lst-pst-hdgfnt">{props.heading}</p>
       </div>
      </div>

      <div className="blog-btmline mt-3"></div>
    </>
  )
}

const HealthyImage = () => {
  return (
        <>
          <div className="mt-4">
           <img src={healthyimg} alt="image" className="hlty-img"/>
          </div>
        </>
  )
}

const FollowMe = () => {
  return (
    <>
      <h3 className="cmt-heading-fnt mt-5">Follow Me</h3>
     <div className="blog-btmline"></div>

     <div>
    <i className="bi bi-facebook fs-5 flw-box-vw"></i>
    <i className="bi bi-twitter fs-5 flw-box-vw ms-3"></i>
    <i className="bi bi-instagram fs-5 flw-box-vw ms-3"></i>
    <i className="bi bi-skype fs-5 flw-box-vw ms-3"></i>
    <i className="bi bi-snapchat fs-5 flw-box-vw ms-3"></i>
     </div>
    </>
  )
}

const MyFeed = () => {
  return (
    <>
      <h3 className="cmt-heading-fnt mt-5">Instagram Feed</h3>
     <div className="d-flex blog-btmline"></div>
  
    </>
  )
}

const TagsBox = () => {
  return (
    <>
      <h3 className="cmt-heading-fnt mt-4">Tags</h3>
     <div className="blog-btmline"></div>

     <div className="tag-dtl-box">
      <p className="tag-box-vw-box">BEAUTY</p>
      <p className="tag-box-vw-box ms-1">FASHION</p>
      <p className="tag-box-vw-box ms-1">FOOD</p>
      <p className="tag-box-vw-box ms-1">ITALIAN</p>
      <p className="tag-box-vw-box ms-1">LIFESTYLE</p>
      <p className="tag-box-vw-box ms-1">LIVING</p>
      <p className="tag-box-vw-box ms-1">NATURE</p>
      <p className="tag-box-vw-box ms-1">RECIPIES</p>
      <p className="tag-box-vw-box ms-1">TRAVEL</p>
     </div>
    </>
  )
}