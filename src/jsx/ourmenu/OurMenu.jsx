import React from 'react';
import './ourmenu.css';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import image4 from '../../assets/images/image4.png';
import image3 from '../../assets/images/image3.png';
import image2 from '../../assets/images/image2.png';
import image1 from '../../assets/images/image1.png';

const OurMenu = () => {
    return (
        <>
          <div className='our-story-bg'>
           <div className="container">
           <div className='text-center'>
              <p className='subheading'>TASTY AND CRUNCHY</p>
              <h3 className='main-heading'>OUR MENU</h3>
              <p className='heading-para-fnt'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia tempora similique neque, nostrum magni sit autem temporibus facere sapiente laborum quaerat! Ducimus commodi earum, totam voluptate alias quos reprehenderit sed odit, nihil adipisci, incidunt laboriosam!</p>
            </div>

            <div className="row">
                <MenuDetails title="Cheese Pizza" price="200"/>
                <MenuDetails title="Mussels Soup" price="350"/>
                <MenuDetails title="Seafood Salad" price="500"/>
                <MenuDetails title="Grilled Fish" price="300"/>
                <MenuDetails title="Stuffed Strawberry" price="400"/>
                <MenuDetails title="Chocolate Cake" price="250"/>
            </div>

           
           </div>
          </div>

          <div className='main-menu-bg'>
          <div className="container">
            <div className="row">
            <MainMenu title="FRESH INGREDIENTS" image={image4}/>
            <MainMenu title="HEALTHY MEALS" image={image3}/>
            <MainMenu title="MEDITERRANEAN TASTE" image={image2}/>
            <MainMenu title="EATING WELL" image={image1}/>
            </div>
          </div>
            </div>
        </>
    )
}

export default OurMenu;

const MenuDetails = (props) => {
    return (
        <>
           <div className="col-md-6 mt-4">
           <div className='d-flex justify-content-between'>
            <h6 className='our-menu-hdg'>{props.title}</h6>
            <div className='tagline'></div>
            <h6 className='our-menu-hdg'><CurrencyRupeeIcon className='rupee-icon'/>{props.price}</h6>
           </div> 
           <p className='submenu-para'>Lorem ipsum dolor sit amet, feugiat delicata.</p>      
          </div>
        </>
    )
}

const MainMenu = (props) => {
    return (
        <>
        <div className="col-md-3">
            <div className='text-center'>
            <img src={props.image} alt="image" />
                <h6 className='main-menu-hdg'>{props.title}</h6>
                <p className='main-mn-para-fnt'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusan tium doloremque</p>
            </div>
        </div>
        </>
    )
}

export {MainMenu}