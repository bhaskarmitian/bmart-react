import * as types from '../type';

export function advertisedOffer() {
  return {
    type: types.ADVERTISED_OFFER,
  };
}

export function populateAdvertisedOffer(param) {
  return {
    type: types.POPULATE_ADVERTISED_OFFER,
    param,
  };
}
export function todayOffers() {
  return {
    type: types.TODAY_OFFER,
  };
}

export function todayOffersPayload(param) {
  return {
    type: types.TODAY_OFFER_PAYLOAD,
    param,
  };
}