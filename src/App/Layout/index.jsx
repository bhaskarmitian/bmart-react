import React from 'react';
//import Sidebar from './Sidebar';
import Toolbar from './Toolbar';
import Footer from './Footer';
//import Content from './Content';
//import Body from './Body';
import AdvertisedOffers from '../Dashboard/AdvertisedOffers/AdvertisedOffers';

const Layout = (props) => {
  console.log("props# "+props);
  return (
    <div>
      <Toolbar />

         <div className="top-brands">
  <div className="container">
    <h2>Top selling offers</h2>
       <AdvertisedOffers/>
    </div>
</div>
{/* props.childreen */}
       <Footer/>
     </div>
  );
};
export default Layout;
