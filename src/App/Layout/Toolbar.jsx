import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


export default function Toolbar() {
  return (
    
 
<div>
  <div className="agileits_header">
    <div className="container">
      <div className="w3l_offers">
        <p>SALE UP TO 70% OFF. USE CODE "SALE70%" . <Link to="products">SHOP NOW</Link></p>
      </div>
      <div className="agile-login">
        <ul>
          <li><Link to="/registration">Create Account</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/help">Help</Link></li>
        </ul>
      </div>
      <div className="product_list_header">  
        <form action="#" method="post" className="last"> 
          <input type="hidden" name="cmd" defaultValue="_cart" />
          <input type="hidden" name="display" defaultValue={1} />
          <button className="w3view-cart" type="submit" name="submit" value><i className="fa fa-cart-arrow-down" aria-hidden="true" /></button>
        </form>  
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>
  <div className="logo_products">
    <div className="container">
      <div className="w3ls_logo_products_left1">
        <ul className="phone_email">
          <li><i className="fa fa-phone" aria-hidden="true" />Order online or call us : (+0123) 234 567</li>
        </ul>
      </div>
      <div className="w3ls_logo_products_left">
        <h1><Link to="/dashbord">super Market</Link></h1>
      </div>
      <div className="w3l_search">
        <form action="#" method="post">
          <input type="search" name="Search" placeholder="Search for a Product..." required />
          <button type="submit" className="btn btn-default search" aria-label="Left Align">
            <i className="fa fa-search" aria-hidden="true"> </i>
          </button>
          <div className="clearfix" />
        </form>
      </div>
      <div className="clearfix"> </div>
    </div>
  </div>


  <div className="navigation-agileits">
  <div className="container">
    <nav className="navbar navbar-default">
      {/* Brand and toggle get grouped for better mobile display */}
      <div className="navbar-header nav_2">
        <button type="button" className="navbar-toggle collapsed navbar-toggle1" data-toggle="collapse" data-target="#bs-megadropdown-tabs">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" />
          <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
      </div> 
      <div className="collapse navbar-collapse" id="bs-megadropdown-tabs">
        <ul className="nav navbar-nav">
          <li className="active"><a href="index.html" className="act">Home</a></li>	
          {/* Mega Menu */}
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Groceries<b className="caret" /></a>
            <ul className="dropdown-menu multi-column columns-3">
              <div className="row">
                <div className="multi-gd-img">
                  <ul className="multi-column-dropdown">
                    <h6>All Groceries</h6>
                    <li><a href="groceries.html">Dals &amp; Pulses</a></li>
                    <li><a href="groceries.html">Almonds</a></li>
                    <li><a href="groceries.html">Cashews</a></li>
                    <li><a href="groceries.html">Dry Fruit</a></li>
                    <li><a href="groceries.html"> Mukhwas </a></li>
                    <li><a href="groceries.html">Rice &amp; Rice Products</a></li>
                  </ul>
                </div>	
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Household<b className="caret" /></a>
            <ul className="dropdown-menu multi-column columns-3">
              <div className="row">
                <div className="multi-gd-img">
                  <ul className="multi-column-dropdown">
                    <h6>All Household</h6>
                    <li><a href="household.html">Cookware</a></li>
                    <li><a href="household.html">Dust Pans</a></li>
                    <li><a href="household.html">Scrubbers</a></li>
                    <li><a href="household.html">Dust Cloth</a></li>
                    <li><a href="household.html"> Mops </a></li>
                    <li><a href="household.html">Kitchenware</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Personal Care<b className="caret" /></a>
            <ul className="dropdown-menu multi-column columns-3">
              <div className="row">
                <div className="multi-gd-img">
                  <ul className="multi-column-dropdown">
                    <h6>Baby Care</h6>
                    <li><a href="personalcare.html">Baby Soap</a></li>
                    <li><a href="personalcare.html">Baby Care Accessories</a></li>
                    <li><a href="personalcare.html">Baby Oil &amp; Shampoos</a></li>
                    <li><a href="personalcare.html">Baby Creams &amp; Lotion</a></li>
                    <li><a href="personalcare.html"> Baby Powder</a></li>
                    <li><a href="personalcare.html">Diapers &amp; Wipes</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Packaged Foods<b className="caret" /></a>
            <ul className="dropdown-menu multi-column columns-3">
              <div className="row">
                <div className="multi-gd-img">
                  <ul className="multi-column-dropdown">
                    <h6>All Accessories</h6>
                    <li><a href="packagedfoods.html">Baby Food</a></li>
                    <li><a href="packagedfoods.html">Dessert Items</a></li>
                    <li><a href="packagedfoods.html">Biscuits</a></li>
                    <li><a href="packagedfoods.html">Breakfast Cereals</a></li>
                    <li><a href="packagedfoods.html"> Canned Food </a></li>
                    <li><a href="packagedfoods.html">Chocolates &amp; Sweets</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Beverages<b className="caret" /></a>
            <ul className="dropdown-menu multi-column columns-3">
              <div className="row">
                <div className="multi-gd-img">
                  <ul className="multi-column-dropdown">
                    <h6>Tea &amp; Coeffe</h6>
                    <li><a href="beverages.html">Green Tea</a></li>
                    <li><a href="beverages.html">Ground Coffee</a></li>
                    <li><a href="beverages.html">Herbal Tea</a></li>
                    <li><a href="beverages.html">Instant Coffee</a></li>
                    <li><a href="beverages.html"> Tea </a></li>
                    <li><a href="beverages.html">Tea Bags</a></li>
                  </ul>
                </div>
              </div>
            </ul>
          </li>
          <li><a href="gourmet.html">Gourmet</a></li>
          <li><a href="offers.html">Offers</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
</div>
<div className="breadcrumbs">
  <div className="container">
    <ol className="breadcrumb breadcrumb1 animated wow slideInLeft" data-wow-delay=".5s">
      <li><a href="index.html"><span className="glyphicon glyphicon-home" aria-hidden="true" />Home</a></li>
      <li className="active">Gourmet</li>
    </ol>
  </div>
</div>


</div>




  )
}
