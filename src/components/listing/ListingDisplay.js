import React from "react";
import { Link } from "react-router-dom";
import "./Listing.css";
import Header from '../Header'

const ListingDisplay = (props) => {
  const res_info_box = (res_list) => {
    if (res_list) {
      return res_list.map((item) => {
        return (
          <div className="search-result1 search-box">
            <div className="search-main-box">
              <div
                className="food-img-listing"
                style={{
                  backgroundImage: `url(${item.restaurant_thumb})`,
                }}
              ></div>
              <div className="food-hotel">
                <Link
                  to={`/details/${item.restaurant_id}?mealId=${props.mealId}`}
                >
                  <div className="hotel-name">{item.restaurant_name}</div>
                </Link>
                <div className="hotel-add">
                  <div className="fort">Fort</div>
                  <div className="address">{item.address}</div>
                </div>
              </div>
            </div>

            <div className="search-food-desc">
              <div className="cuisines">
                <div className="cuisines-text">Cuisines</div>
                <div className="cuisines-val">Bakery</div>
              </div>
              <div className="cost-for-two-per">
                <div className="cost-for-two-per-text">Cost For Two</div>
                <div className="cost-val">₹{item.cost}</div>
              </div>
            </div>
          </div>
        );
      })
      
    }
    else{
      return(
        <div className="loader">
          <img src="/images/loading-13.gif"/>
        </div>
      )
    }
  };
  return (
    <>
     
      <Header />
      <div className="search-content">
        <div className="search-text">Breakfast Places in Mumbai</div>
        <div className="filter-search-sec">
          <div className="filter-sec-box">
            <select name="filter-content-text" id="filter-content-text">
              <option value="" disabled selected hidden>
                Filters / sort
              </option>
            </select>
          </div>
          <div className="filter-sec">
            <div className="filter-text">Filters</div>
            <div className="select-loc-text">Select location</div>
            <div className="location-listing">
              <select name="location-listing-box" id="location-listing-search">
                <option value="" disabled selected hidden>
                  Select location
                </option>
                <option value="Delhi">Delhi</option>
                <option value="Bengaluru">Bengaluru</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Pune">Pune</option>
              </select>
            </div>
            <div className="cuisine">
              <div className="cuisine-text">Cuisine</div>
              <div className="cuisine-checkbox">
                <div className="food-con-type">
                  <input
                    type="checkbox"
                    name="north-indian"
                    value="north-indian"
                    id="north-indian"
                  />
                  <label for="north-indian">North Indian</label>
                </div>
                <div className="food-con-type">
                  <input
                    type="checkbox"
                    name="south-indian"
                    value="south-indian"
                    id="south-indian"
                  />
                  <label for="south-indian">South Indian</label>
                </div>

                <div className="food-con-type">
                  <input
                    type="checkbox"
                    name="chinese"
                    value="chinese"
                    id="chinese"
                  />
                  <label for="chinese">Chinese</label>
                </div>

                <div className="food-con-type">
                  <input
                    type="checkbox"
                    name="fast-food"
                    value="fast-food"
                    id="fast-food"
                  />
                  <label for="fast-food">Fast Food</label>
                </div>

                <div className="food-con-type">
                  <input
                    type="checkbox"
                    name="street-food"
                    value="street-food"
                    id="street-food"
                  />
                  <label for="street-food">Street Food</label>
                </div>
              </div>
            </div>

            <div className="cost-for-two">
              <div className="cost-for-two-text">Cost For Two</div>
              <div className="cost-radio-box">
                <div className="cost">
                  <input
                    type="radio"
                    name="cost-for-two-per"
                    value="less-than-500"
                    id="less-than-500"
                  />
                  <label for="less-than-500">Less than ₹ 500</label>
                </div>

                <div className="cost">
                  <input
                    type="radio"
                    name="cost-for-two-per"
                    value="to-1000"
                    id="to-1000"
                  />
                  <label for="to-1000">₹ 500 to ₹ 1000</label>
                </div>

                <div className="cost">
                  <input
                    type="radio"
                    name="cost-for-two-per"
                    value="to-1500"
                    id="to-1500"
                  />
                  <label for="to-1500">₹ 1000 to ₹ 1500</label>
                </div>

                <div className="cost">
                  <input
                    type="radio"
                    name="cost-for-two-per"
                    value="to-2000"
                    id="to-2000"
                  />
                  <label for="to-2000">₹ 1500 to ₹ 2000</label>
                </div>

                <div className="cost">
                  <input
                    type="radio"
                    name="cost-for-two-per"
                    value="above-2000"
                    id="above-2000"
                  />
                  <label for="above-2000">₹ 2000+</label>
                </div>
              </div>
            </div>

            <div className="sort">
              <div className="sort-text">Sort</div>
              <div className="sort-radio">
                <input
                  type="radio"
                  name="price"
                  value="low-to-high"
                  id="low-to-high"
                />
                <label for="low-to-high">Price low to high</label>
              </div>
              <div className="sort-radio">
                <input
                  type="radio"
                  name="price"
                  value="high-to-low"
                  id="high-to-low"
                />
                <label for="high-to-low">Price high to low</label>
              </div>
            </div>
          </div>
          <div className="search-results">
            {res_info_box(props.res_list)}
            <div className="pagination-sec">
              <ul>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-left"></i>
                  </a>
                </li>
                <li className="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">
                    <i className="fas fa-chevron-right"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDisplay;
