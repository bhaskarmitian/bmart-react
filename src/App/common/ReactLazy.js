import React from "react";

// Lazy loading for Components
export const Login = React.lazy(() => {
  return import("../Auth/Login");
});

export const AdvertisedOffers = React.lazy(() => {
  return import("../Dashboard/AdvertisedOffers/AdvertisedOffers");
});

