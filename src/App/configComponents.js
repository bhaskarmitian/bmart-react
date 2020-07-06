
//import {AdvertisedOffers ,Login} from "App/common/ReactLazy";
//export const NAV_LIST = { backup: { title: 'Backup', component: Backup } };
import AdvertisedOffers from './Dashboard/AdvertisedOffers/AdvertisedOffers'
import Login from './Auth/Login';
import Registration from './Auth/Registration';


export const NAV_LIST = [
   {
     name: "Registration",
     path: "/registration",
     component: Registration
   },
    {
      name: "AdvertisedOffers",
      path: "/advertisedOffers",
      component: AdvertisedOffers
    },
   
    {
      name: "Login",
      path: "/login",
      component: Login
    }
  ];