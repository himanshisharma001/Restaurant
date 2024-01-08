import React from 'react';
import './aboutus.css';
import Chef from '../ourchef/Chef';
import Footer from '../footer/Footer';
import abtimg from '../../assets/images/abtimg.png';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import cake from '../../assets/images/cake.jpg';
import itpasta from '../../assets/images/itpasta.jpg';
import sppasta from '../../assets/images/sppasta.jpg';
import { RecipeBox } from '../special-recipe/Recipes';
import Header from '../header/Header';

const AboutUs = () => {
    return (
        <>
        <Header />
        <AboutBanner />
        <AboutStory />
                 <Chef />
                 <Specialties />
                 <Footer />
        </>
    )
}

export default AboutUs;

const AboutBanner = () => {
  return (
    <>
    <div className="about-banner-box">
         <h5 className="text-center blg-bnr-fnt-sz">ABOUT US</h5>
    </div>
    </>
  )
}

const AboutStory = () => {
    return (
        <>
     <div className='our-specl-bg'>
            <div className="container">
            <div className='text-center'>
              <p className='subheading pt-3'>TASTY AND CRUNCHY</p>
              <h3 className='main-heading'>OUR STORY</h3>
              <p className='heading-para-fnt'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo minima nisi tempore dignissimos odit reprehenderit magnam, reiciendis atque voluptates hic voluptatem doloremque porro laborum inventore?</p>
            </div>

            <div className="row">
            <RecipeBox image={sppasta} title="SPRING VEGGIES AND PASTA"/>
            <RecipeBox image={cake} title="CHOCOLATE CAKE"/>
            <RecipeBox image={itpasta} title="ITALIAN FAMOUS PASTA"/>

            
            </div>
            </div>
            </div>
        </>
    )
}

// const StoryContent = (props) => {
//     return (
//         <>
//      <div className="col-md-4 mt-4">
//             <div className="" style={{cursor:'pointer'}}>
//               <div className="rep-img-box">
//                 <img src={props.image} alt="image" className="stroy-img" />
//               </div>
//               <h6 className="rep-main-hdg mt-4">{props.title}</h6>
//               <p className="rep-para-hdg">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque lauatium, totam rem aperiam perspiciatis unde omnis....</p>
            
//               <p className="abt-read-mr">READ MORE</p>
//               <div className="btm-line"></div>
//               </div>
//             </div>
//         </>
//     )
// }

const Specialties = () => {
  
  
    return (
        <>
    <div className='our-specl-bg'>
            <div className="container">
            <div className='text-center'>
              <p className='subheading pt-5'>TASTY AND CRUNCHY</p>
              <h3 className='main-heading'><b>OUR Specialties</b></h3>
            </div>
              
              <div className="row">
                <div className="col-md-6 mt-4">
                  <div><img src={abtimg} alt="image" className='stroy-img'/></div>
                </div>

                <div className='col-md-6 mt-4'>
                    <SpecialTabs />
                </div>
              </div>
       
            </div>
            </div>
        </>
    )
}

const SpecialTabs = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
    return (
        <>
             <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="STARTERS" {...a11yProps(0)} />
          <Tab label="MAINS" {...a11yProps(1)} />
          <Tab label="DESSERTS" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <p className='tab-para-dtl mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostu exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostu exercitation ullamco enim.</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <p className='tab-para-dtl mt-3'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nobis architecto at quas totam. Eveniet!</p>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
       <p className='tab-para-dtl mt-3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostu exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat quis nostu exercitation ullamco enim.</p>
      </CustomTabPanel>
    </Box>
        </>
    )
}

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }