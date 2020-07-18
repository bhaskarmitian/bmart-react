import React,{ useState,useEffect } from 'react';
import AdvertisedOffers from './AdvertisedOffers/AdvertisedOffers';
import TodayOffers from './TodayOffers/TodayOffers';
import axios from 'axios';
import productservice from '../api/productservice';
import {TODAY_OFFER_PAYLOAD} from '../redux/type'
import { connect } from 'react-redux';
import {todayOffersPayload} from '../redux/action/index'

const Dashboard=(props)=> {

  const [page, setPage] = useState("advertisedOffers");
  const [todaysOffer, setTodaysOffer] = useState([]);
 
  // useEffect(() => {
  //   productservice.getAdvertisedProduct()
  //    .then(res => {
  //     // console.log(props)
  //         //setTodaysOffer(res.data);
  //           //setLoad(true);
  //           props.todayOffersPayload1(res.data)
  //    })
  //       .catch(err => {
  //           //setError(err.message);
  //           //setLoad(true)
  //       })
  //  }, []);
 const updateTodaysOffer=()=>{
  productservice.getAdvertisedProduct()
  .then(res => {
    //console.log(props)
         props.todayOffersAction(res.data)
  })
     .catch(err => {
         //setError(err.message);
         //setLoad(true)
     })

  setPage("todayOffers");


 }
    return (
<div className="top-brands">
  <div className="container">
    <h2>Top selling offers</h2>
    <div className="grid_3 grid_5">
      <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true" onClick={()=>setPage("advertisedOffers")}>Advertised offers</a></li>
          {/* <li role="presentation"><a role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours" onClick={()=>setPage("todayOffers")}>Today Offers</a></li> */}
          <li role="presentation"><a role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours" onClick={() => updateTodaysOffer()}>Today Offers</a></li>
        </ul>

        <div id="myTabContent" className="tab-content">
         {page === "advertisedOffers" ? <AdvertisedOffers/> : <TodayOffers/>}
        </div>
        </div>
    </div>
 

    </div>
    </div>
    );
}
  const mapDispatchToProps = dispatch => ({
    todayOffersAction: data => {
     dispatch(todayOffersPayload(data));
    },
   });

 export default connect(null, mapDispatchToProps)(Dashboard); 