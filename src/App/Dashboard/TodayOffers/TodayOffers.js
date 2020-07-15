import React from 'react';
import { connect } from 'react-redux';
import TodaysOffer from './TodaysOffer';

const TodayOffers = (props)=> {
    return (
        <div role="tabpanel" className="tab-pane fade active in" id="tours" aria-labelledby="tours-tab">
        <div className="agile-tp">
            <h5>This week</h5>
            <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
        </div>
        <div className="agile_top_brands_grids">

            {props.todayOfferList["TodaysOffers"].map((value, i) => {
             return <TodaysOffer key={i} value={value}/>;
            })}
           <div className="clearfix"> </div>
        </div>
        </div>

    );
}
const mapStateToProps=(state)=> {
  return {
    todayOfferList: state.advertisedReducer
  };
}

// const mapDispatchToProps=(dispatch)=> {
//         return bindActionCreators({action.populateAdvertisedOffer}, dispatch);
// }
export default connect(mapStateToProps, null)(TodayOffers);
//export default TodayOffers;