import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Tabs, Tab, TabPanel, TabList } from "react-web-tabs";
import "react-web-tabs/dist/react-web-tabs.css";
import axios from "axios";
import Header from "../Header";
import "./RestaurantDetails.css";

const resurl = "https://edumatoapifordev.herokuapp.com/details/";

class RestaurantDetails extends Component {
  constructor(props) {
    super();

    this.state = {
      restaurant_detail: "",
    };
  }

  render_restaurant = () => {
    if (this.state.restaurant_detail) {
      return (
        <div className="restaurant-details">
          <div
            className="restaurant-img"
            style={{
              backgroundImage: `url(${this.state.restaurant_detail.restaurant_thumb})`,
            }}
          >
            <button className="img-gallery-btn">
              Click to see Image Gallery
            </button>
          </div>
          <h1 className="restaurant-name">
            {this.state.restaurant_detail.restaurant_name}
          </h1>
          <div className="navigation">
            <Tabs defaultTab="one">
              <TabList>
                <Tab tabFor="one">
                  <h3 className="nav-name">Overview</h3>
                </Tab>
                <Tab tabFor="two">
                  <h3 className="nav-name">Contact</h3>
                </Tab>
              </TabList>
              <TabPanel tabId="one">
                <div className="overview-box">
                  <div className="about">
                    <h3 className="about-name">About this place</h3>
                  </div>
                  <div className="cuisine-box">
                    <h3 className="cuisine-text">Cuisine</h3>
                    <div className="cuisine-info">
                      <h4>
                        <span>
                          {
                            this.state.restaurant_detail.cuisines[0]
                              .cuisine_name
                          }
                          ,
                        </span>
                        <span>
                          {
                            this.state.restaurant_detail.cuisines[1]
                              .cuisine_name
                          }
                        </span>
                      </h4>
                    </div>
                  </div>
                  <div className="avg-box">
                    <h3 className="avg-text">Average Cost</h3>
                    <div className="avg-info">
                      <h4>
                        ₹{this.state.restaurant_detail.cost} for two people
                        (approx.)
                      </h4>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel tabId="two">
                <div className="contact-box">
                  <div className="phone-nub">
                    <h2 className="phone-nob-text">Phone Number</h2>
                    <h2 className="act-phone-no">
                      +91 {this.state.restaurant_detail.contact_number}
                    </h2>
                  </div>
                  <div className="res-address">
                    <h3 className="rest-name">
                      {this.state.restaurant_detail.restaurant_name}
                    </h3>
                    <h3 className="rest-address">
                      {this.state.restaurant_detail.address}
                    </h3>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
            <button className="place-order-btn">Place Online Order</button>
          </div>
        </div>
      );
    }
  };

  render() {
    return (
      <>
        <Header />
        <Link to={`/list/${this.props.location.search.split("=")[1]}`}>

          <button className="back">
            <i
              class="fas fa-long-arrow-alt-left"
              style={{ color: "white" }}
            ></i>{" "}
            Go Back
          </button>
        </Link>
        {this.render_restaurant()}
      </>
    );
  }

  componentDidMount() {
    let res_id = this.props.match.params.res_id;
    axios.get(`${resurl}${res_id}`).then((res) => {
      this.setState({ restaurant_detail: res.data[0] });
    });
  }
}

export default RestaurantDetails;
