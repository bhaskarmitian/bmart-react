const advertisedList = require('../../common/dummies/dashboard_json.json');
//console.log(advertisedList)

function populateAdvertisedOffer(state, action) {
  return action.param;
}
const dashboardReducer = (state= advertisedList, action) => { 
  switch (action.type) {
    case 'ADVERTISED_OFFER':
      return state;
    case 'POPULATE_ADVERTISED_OFFER':
      // return populateAdvertisedOffer(state, action);
      return state;
    case 'TODAY_OFFER_PAYLOAD':
      console.log(action)
        return state;
  
    default:
      return state;
  }
};
export default dashboardReducer;
