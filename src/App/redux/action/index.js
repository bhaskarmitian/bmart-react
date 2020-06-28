import * as types from '../type';

export function advertisedOffer() {
  return {
    type: types.ADVERTISED_OFFER,
  };
}

export function populateAdvertisedOffer() {
  return {
    type: types.POPULATE_ADVERTISED_OFFER,
    param,
  };
}
