import React from 'react';

const TodaysOffer=(props)=> {
    return (
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
                    <p>{props.value.name}</p>
                    <div className="stars">
                        <i className="fa fa-star blue-star" aria-hidden="true" />
                        <i className="fa fa-star blue-star" aria-hidden="true" />
                        <i className="fa fa-star blue-star" aria-hidden="true" />
                        <i className="fa fa-star blue-star" aria-hidden="true" />
                        <i className="fa fa-star gray-star" aria-hidden="true" />
                    </div>
                    <h4>${props.value.discountedPrice}<span>${props.value.price}</span></h4>
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
                        <input type="submit" name="submit" defaultValue="Add to cart" 
                        className="button" />
                        </fieldset>
                    </form>
                    </div>
                </div>
                </figure>
            </div>
            </div>
        </div>
        </div>
        
      
                  
    );
}

export default TodaysOffer;