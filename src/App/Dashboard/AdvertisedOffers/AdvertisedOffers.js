import React from 'react';
import AdvertisedOffer from './AdvertisedOffer';
import { connect } from 'react-redux';

const AdvertisedOffers = (props)=>{
//console.log(props.advertisedList);
//const advertisedItem=Object.key(props.advertisedList)
 return(

<div role="tabpanel" className="tab-pane fade active in" id="expeditions" aria-labelledby="expeditions-tab">
  <div className="agile-tp">
    <h5>Advertised this week</h5>
    <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
  </div>
  <div className="agile_top_brands_grids">
      {props.advertisedList["advertised"].map((value, i) => {
             return <AdvertisedOffer key={i} value={value}/>;
     })}  
     <div className="clearfix"> </div>  
</div>
 </div>
 )
}

const mapStateToProps=(state)=> {
  return {
    advertisedList: state.advertisedReducer
  };
}
// function mapDispatchToProps(dispatch: any) {
//   return bindActionCreators({}, dispatch);
// }
export default connect(mapStateToProps, null)(AdvertisedOffers);