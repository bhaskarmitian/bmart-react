import React from 'react';

function Grocery(props) {
    return (
       <div className="products">
  <div className="container">
    <div className="col-md-4 products-left">
      <div className="categories">
        <h2>Categories</h2>
        <ul className="cate">
          <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fruits And Vegetables</a></li>
          <ul>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Cuts &amp; Sprouts</a></li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Flowers</a></li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fresh Herbs &amp; Seasonings</a></li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Fresh Vegetables</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />International Vegetables</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Organic Fruits &amp; Vegetables</a></li>
          </ul>
          <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Grocery &amp; Staples</a></li>
          <ul>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Dals &amp; Pulses</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Dry Fruits</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Edible Oils &amp; Ghee</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Flours &amp; Sooji</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Masalas &amp; Spices</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Organic Staples</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Rice &amp; Rice Products</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Salt, Sugar &amp; Jaggery</a></li>
          </ul>
          <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />PersonalCare</a></li>
          <ul>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Baby Care</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Cosmetics</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Deos &amp; Perfumes</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Skin Care</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Sanitary Needs</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Oral Care</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Personal Hygiene</a> </li>
            <li><a href="products.html"><i className="fa fa-arrow-right" aria-hidden="true" />Shaving Needs</a></li>
          </ul>
        </ul>
      </div>																																												
    </div>
    <div className="col-md-8 products-right">
      <div className="products-right-grid">
        <div className="products-right-grids">
          <div className="sorting">
            <select id="country" onchange="change_country(this.value)" className="frm-field required sect">
              <option value="null">Default sorting</option>
              <option value="null">Sort by popularity</option> 
              <option value="null">Sort by average rating</option>					
              <option value="null">Sort by price</option>								
            </select>
          </div>
          <div className="sorting-left">
            <select id="country1" onchange="change_country(this.value)" className="frm-field required sect">
              <option value="null">Item on page 9</option>
              <option value="null">Item on page 18</option> 
              <option value="null">Item on page 32</option>					
              <option value="null">All</option>								
            </select>
          </div>
          <div className="clearfix"> </div>
        </div>
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
                      <a href="single.html"><img title=" " alt=" " src="images/pf4.png" /></a>		
                      <p>Sampann-toor-dal</p>
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
                      <a href="single.html"><img title=" " alt=" " src="images/bv3.png" /></a>		
                      <p>Parryss-sugar</p>
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
                      <a href="single.html"><img src="images/16.png" alt=" " className="img-responsive" /></a>
                      <p>Saffola-gold</p>
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
                      <a href="single.html"><img title=" " alt=" " src="images/hh4.png" /></a>		
                      <p>Sampann-toor-dal</p>
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
                      <a href="single.html"><img title=" " alt=" " src="images/gu5.png" /></a>		
                      <p>Parryss-sugar</p>
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
                      <a href="single.html"><img src="images/pc6.png" alt=" " className="img-responsive" /></a>
                      <p>Saffola-gold</p>
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
                      <a href="single.html"><img title=" " alt=" " src="images/gu4.png" /></a>		
                      <p>Sampann-toor-dal</p>
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
                      <a href="single.html"><img title=" " alt=" " src="images/5.png" /></a>		
                      <p>Parryss-sugar</p>
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
                      <a href="single.html"><img src="images/6.png" alt=" " className="img-responsive" /></a>
                      <p>Saffola-gold</p>
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
      <nav className="numbering">
        <ul className="pagination paging">
          <li>
            <a href="#" aria-label="Previous">
              <span aria-hidden="true">«</span>
            </a>
          </li>
          <li className="active"><a href="#">1<span className="sr-only">(current)</span></a></li>
          <li><a href="#">2</a></li>
          <li><a href="#">3</a></li>
          <li><a href="#">4</a></li>
          <li><a href="#">5</a></li>
          <li>
            <a href="#" aria-label="Next">
              <span aria-hidden="true">»</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="clearfix"> </div>
  </div>
</div>

    );
}

export default Grocery;