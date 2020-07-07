import React,{ useState } from 'react';
import AdvertisedOffers from './AdvertisedOffers/AdvertisedOffers';
import TodayOffers from './TodayOffers/TodayOffers';

const Dashboard=(props)=> {

  const [page, setPage] = useState("advertisedOffers");
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



        </div>
        </div>
    </div>
 

    </div>
    </div>
    );
}

export default Dashboard;