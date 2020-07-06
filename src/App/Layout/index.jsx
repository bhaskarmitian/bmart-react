import React from 'react';
//import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Footer from './Footer';
import AdvertisedOffers from '../Dashboard/AdvertisedOffers/AdvertisedOffers';

const Layout = (props) => {
  //console.log(props);
  return (
    <div>
      <Toolbar />

         {/* <div className="top-brands">
  <div className="container">
    <h2>Top selling offers</h2>
       <AdvertisedOffers/>
    </div>
</div> */}
{props.children}

       <Footer/>
     </div>
  );
};
export default Layout;
