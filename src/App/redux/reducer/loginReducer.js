const register = require('../../common/dummies/registration_json.json');
//console.log(JSON.stringify(register))

function populateAdvertisedOffer(state, action) {
  return action.param;
}
const loginReducer = (state= register, action) => { 
  switch (action.type) {
    // case 'REGISTER':
    //   return state;
    // case 'POPULATE_ADVERTISED_OFFER':
    //   return populateAdvertisedOffer(state, action);

    default:
      return state;
  }
};
export default loginReducer;