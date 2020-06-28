import React from 'react';
import AdvertisedOffer from './AdvertisedOffer';

const AdvertisedOffers = ()=>{
 return(
<div className="grid_3 grid_5">
      <div className="bs-example bs-example-tabs" role="tabpanel" data-example-id="togglable-tabs">
        <ul id="myTab" className="nav nav-tabs" role="tablist">
          <li role="presentation" className="active"><a href="#expeditions" id="expeditions-tab" role="tab" data-toggle="tab" aria-controls="expeditions" aria-expanded="true">Advertised offers</a></li>
          <li role="presentation"><a href="#tours" role="tab" id="tours-tab" data-toggle="tab" aria-controls="tours">Today Offers</a></li>
        </ul>
        <div id="myTabContent" className="tab-content">
          <div role="tabpanel" className="tab-pane fade in active" id="expeditions" aria-labelledby="expeditions-tab">
            <div className="agile-tp">
              <h5>Advertised this week</h5>
              <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
            </div>

<AdvertisedOffer/>


            </div>
          <div role="tabpanel" className="tab-pane fade" id="tours" aria-labelledby="tours-tab">
            <div className="agile-tp">
              <h5>This week</h5>
              <p className="w3l-ad">We've pulled together all our advertised offers into one place, so you won't miss out on a great deal.</p>
            </div>
            <div className="agile_top_brands_grids">
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img title=" " alt=" " src="images/7.png" /></a>		
                            <p>Sona-masoori-rice</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$35.99 <span>$55.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                <input type="hidden" name="amount" defaultValue="35.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img title=" " alt=" " src="images/8.png" /></a>		
                            <p>Milky-mist-paneer</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$30.99 <span>$45.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                <input type="hidden" name="amount" defaultValue="30.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img src="images/9.png" alt=" " className="img-responsive" /></a>
                            <p>Basmati-Rice</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$80.99 <span>$105.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                <input type="hidden" name="amount" defaultValue={80.00} />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="agile_top_brands_grids">
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img title=" " alt=" " src="images/10.png" /></a>		
                            <p>Fortune-sunflower</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$20.99 <span>$35.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Fortune Sunflower Oil" />
                                <input type="hidden" name="amount" defaultValue="20.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img title=" " alt=" " src="images/12.png" /></a>		
                            <p>Nestle-a-slim</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$20.99 <span>$35.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="basmati rise" />
                                <input type="hidden" name="amount" defaultValue="20.99" />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4 top_brand_left">
                <div className="hover14 column">
                  <div className="agile_top_brand_left_grid">
                    <div className="agile_top_brand_left_grid_pos">
                      <img src="images/offer.png" alt=" " className="img-responsive" />
                    </div>
                    <div className="agile_top_brand_left_grid1">
                      <figure>
                        <div className="snipcart-item block">
                          <div className="snipcart-thumb">
                            <a href="products.html"><img src="images/13.png" alt=" " className="img-responsive" /></a>
                            <p>Bread-sandwich</p>
                            <div className="stars">
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star blue-star" aria-hidden="true" />
                              <i className="fa fa-star gray-star" aria-hidden="true" />
                            </div>
                            <h4>$40.99 <span>$65.00</span></h4>
                          </div>
                          <div className="snipcart-details top_brand_home_details">
                            <form action="#" method="post">
                              <fieldset>
                                <input type="hidden" name="cmd" defaultValue="_cart" />
                                <input type="hidden" name="add" defaultValue={1} />
                                <input type="hidden" name="business" defaultValue=" " />
                                <input type="hidden" name="item_name" defaultValue="Pepsi soft drink" />
                                <input type="hidden" name="amount" defaultValue={40.00} />
                                <input type="hidden" name="discount_amount" defaultValue={1.00} />
                                <input type="hidden" name="currency_code" defaultValue="USD" />
                                <input type="hidden" name="return" defaultValue=" " />
                                <input type="hidden" name="cancel_return" defaultValue=" " />
                                <input type="submit" name="submit" defaultValue="Add to cart" className="button" />
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </figure>
                    </div>
                  </div>
                </div>
              </div>
              <div className="clearfix"> </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
 )

}
export default AdvertisedOffers