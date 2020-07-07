
//import {AdvertisedOffers ,Login} from "App/common/ReactLazy";
//export const NAV_LIST = { backup: { title: 'Backup', component: Backup } };
import Dashboard from './Dashboard/index'
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
      path: "/dashbord",
      component: Dashboard
    },
   
    {
      name: "Login",
      path: "/login",
      component: Login
    }
  ];