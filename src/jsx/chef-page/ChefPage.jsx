import React from 'react';
import './chef-page.css';
import Footer from '../footer/Footer';
import chef1 from '../../assets/images/chef1.png';
import chef2 from '../../assets/images/chef2.png';
import chef3 from '../../assets/images/chef3.png';
import chef4 from '../../assets/images/chef4.png';
import chef5 from '../../assets/images/chef5.png';
import chef6 from '../../assets/images/chef6.png';
import chef7 from '../../assets/images/chef7.png';
import chef8 from '../../assets/images/chef8.png';
import Header from '../header/Header';

const ChefPage = () => {
    return (
        <>
        <Header />
        <ChefBanner />
            <div className='our-specl-bg'>
            <div className="container">
            <div className='text-center'>
              <p className='subheading pt-3'>TASTY AND CRUNCHY</p>
              <h3 className='main-heading'><b>Our Great Chefs</b></h3>
              <p className='heading-para-fnt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedolorm reminusto<br /> doeiusmod tempor incidition ulla mco laboris nisi ut aliquip ex ea commo <br />condorico consectetur adipiscing elitut aliquip.</p>
            </div>

            <div className="row">
              <ChefComponent image={chef1} name="GARY BROOKS" subheading="CHEF"/>
              <ChefComponent image={chef2} name="JOE THOMAS" subheading="CHEF"/>
              <ChefComponent image={chef3} name="CAROL BENNETT" subheading="COOK"/>
              <ChefComponent image={chef4} name="HANNAH CARROLL" subheading="PÂTISSIER"/>
              <ChefComponent image={chef5} name="LENA DOLMAN" subheading="CHEF"/>
              <ChefComponent image={chef6} name="TOMAS BURGESS" subheading="PÂTISSIER"/>
              <ChefComponent image={chef7} name="CAROL FRANCIS" subheading="CHEF"/>
              <ChefComponent image={chef8} name="JULIAN GILBEY" subheading="COOK"/>
            </div>
            </div>
            </div>

            <Footer /> 
        </>
    )
}

export default ChefPage;

const ChefBanner = () => {
    return (
      <>
      <div className="chef-banner-box">
           <h5 className="text-center blg-bnr-fnt-sz">OUR CHEF</h5>
      </div>
      </>
    )
  }


const ChefComponent = (props) => {
    return (
        <>
        <div className="col-md-3 mt-5">
            <div className='chef-img-box'><img src={props.image} alt="chef" className='stroy-img' style={{borderRadius:'100%'}}/></div>
            <h6 className='chef-name'>{props.name}</h6>
            <p className='chef-subocp'>{props.subheading}</p>
            <p className="rep-para-hdg text-center">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque.</p>
            <div className='text-center mt-3 mb-3'>
               <i className="bi bi-facebook cnt-icn-vw"></i>
               <i className="bi bi-instagram cnt-icn-vw ms-2"></i>
               <i className="bi bi-twitter-x cnt-icn-vw ms-2"></i>
               <i className="bi bi-whatsapp cnt-icn-vw ms-2"></i>
               </div>
        </div>
        </>
    )
}