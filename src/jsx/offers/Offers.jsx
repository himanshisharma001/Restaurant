import React from 'react';
import './offers.css';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import tabimg1 from '../../assets/images/tabimg1.png';
import tabimg2 from '../../assets/images/tabimg2.png';
import tabimg3 from '../../assets/images/tabimg3.png';
import tabimg4 from '../../assets/images/tabimg4.png';
import tabimg5 from '../../assets/images/tabimg5.png';
import tabimg6 from '../../assets/images/tabimg6.png';

const Offers = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
        <>
          
           <Box
      sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
      className="offers-bg-vw"
    >
     <div className='container'>

    <div className="row">
        <div className="col-md-4">
        <Tabs
        orientation="vertical"
        // variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: 'divider' }}
      >
        <Tab label="CHEESE CROISSANTS" {...a11yProps(0)} />
        <Tab label="BRUSCHETTI" {...a11yProps(1)} />
        <Tab label="AWESOME VEGETABLES" {...a11yProps(2)} />
        <Tab label="TASTY SNACKS" {...a11yProps(3)} />
        <Tab label="ALL-TIME BEST RECIPES" {...a11yProps(4)} />
        <Tab label="MEAL FOR WHOLE FAMILY" {...a11yProps(5)} />
       
      </Tabs>
        </div>

        <div className="col-md-8 mt-4">
        <TabPanel value={value} index={0}>
       <TabDetails title="TODAY’S BEST OFFER" image={tabimg1}/>
      </TabPanel>
      <TabPanel value={value} index={1}>
      <TabDetails title="SMALL BITE" image={tabimg2}/>
      </TabPanel>
      <TabPanel value={value} index={2}>
      <TabDetails title="TODAY’S MENU" image={tabimg3}/>
      </TabPanel>
      <TabPanel value={value} index={3}>
      <TabDetails title="TRY OUR SNACKS" image={tabimg4}/>
      </TabPanel>
      <TabPanel value={value} index={4}>
      <TabDetails title="EXOTIC TASTE" image={tabimg5}/>
      </TabPanel>
      <TabPanel value={value} index={5}>
      <TabDetails title="OFFER FOR DESSERTS" image={tabimg6}/>
      </TabPanel>
     
        </div>
    </div>
     
     </div>
    </Box>

          
        </>
    )
}

export default Offers;


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
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
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `vertical-tab-${index}`,
      'aria-controls': `vertical-tabpanel-${index}`,
    };
  }

  const TabDetails = (props) => {
    return (
        <>
<div className='row'>
      <div className='col-md-9'>
        <h5 className='tab-data-hdg'>{props.title}</h5>
        <p className='tab-para-dtl'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>

        <p className='tab-para-dtl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non.</p>
      </div>
      <div className="col-md-3">
      <div className='tab-menu-image'><img src={props.image} alt="image" className='stroy-img'/></div>
      </div>
      
      </div>
        </>
    )
  }