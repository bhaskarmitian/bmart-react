import React,{ useState,useEffect } from 'react';
import AdvertisedOffers from './AdvertisedOffers/AdvertisedOffers';
import TodayOffers from './TodayOffers/TodayOffers';
import axios from 'axios';
import productservice from '../api/productservice';
import {todayOffersPayload} from '../redux/action/index'
import { connect } from 'react-redux';

const Dashboard=(props)=> {

  const [page, setPage] = useState("advertisedOffers");
  const [getTodaysOfferResp, setTodaysOffer] = useState([]);
 
  useEffect(() => {
    console.log("useeffect")
    productservice.getAdvertisedProduct()
     .then(res => {
          setTodaysOffer(res.data);
            //setLoad(true);
     })
        .catch(err => {
            //setError(err.message);
            //setLoad(true)
        })
   }, []);


    return (
<div className="top-brands">
  <div className="container">
    <h2>Top selling offers</h2>
    <div className="grid_3 grid_5">
      <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true" onClick={()=>setPage("advertisedOffers")}>Advertised offers</a></li>
          <li role="presentation"><a role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours" onClick={()=>setPage("todayOffers")}>Today Offers</a></li>
        </ul>

        <div id="myTabContent" className="tab-content">
         {page === "advertisedOffers" ? <AdvertisedOffers/> : <TodayOffers/>}

         {console.log(page)}

        </div>
        </div>
    </div>
 

    </div>
    </div>
    );
}
const mapDispatchToProps = dispatch => ({
  todayOffersPayload: getTodaysOfferResp => {
  dispatch(todayOffersPayload(getTodaysOfferResp));
   // dispatch(navigateTo({ routeName: 'messagesList' }));
  },
 });

 export default connect(null, mapDispatchToProps)(Dashboard); 
//export default Dashboard;