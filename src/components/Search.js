import React, { Component } from "react";
import FilteredRestaurants from "./FilteredRestaurants";
import "./Search.css";

const locationurl = "https://edumatoapifordev.herokuapp.com/location";
const restauranturl =
  "https://edumatoapifordev.herokuapp.com/restaurants?stateId=";

class Search extends Component {
  constructor(props) {
    super();

    this.state = {
      locationData: "",
      keyword: "",
      restaurantData: "",
      filteredResList: "",
    };
  }

  renderCity = (data) => {
    if (data) {
      return data.map((item) => {
        return <option value={item.state_id}>{item.state}</option>;
      });
    }
  };

  handleCity = (event) => {
    const stateId = event.target.value;
    fetch(`${restauranturl}${stateId}`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restaurantData: data, filteredResList: data });
        // console.log(this.state.restaurantData)
      });
  };

  render_restaurant = (data) => {
    if (data) {
      return data.map((item) => {
        // return (
        // );
      });
    }
  };

  getResList = (event) => {
    this.setState({ keyword: event.target.value });
    // const output = [];
    // console.log(typeof output);

    // for (let i = 0; i < this.state.restaurantData.length; i++) {
    //     if(this.state.restaurantData[i].restaurant_name
    //     .toLowerCase()
    //     .indexOf(this.state.keyword.toLowerCase()) > -1){
    //       output.push(this.state.restaurantData[i])
    //     }
    // }
    const output = this.state.restaurantData.filter((item) => {
      return (
        item.restaurant_name
          .toLowerCase()
          .indexOf(this.state.keyword.toLowerCase()) > -1
      );
    });
    // console.log(typeof(output))
    // console.log(this.state.filteredResList)

    this.setState({ filteredResList: output });
  };

  render() {
    return (
      <div id="header">
        <div id="login">
          <a href="#">Login</a>
        </div>
        <div id="create-account">
          <button id="acc-btn">Create an account</button>
        </div>
        <div className="logo-circle">
          <div className="logo">e!</div>
        </div>

        <div className="header-heading">
          Find the best restaurants, cafés, and bars
        </div>
        <div className="location" onChange={this.handleCity}>
          <select name="location-box" id="location-search" className="box">
            <option value="" disabled selected hidden>
              Please type a location
            </option>
            {this.renderCity(this.state.locationData)}
          </select>
        </div>
        <div className="restaurants">
          <input
            name="restaurants-box"
            id="restaurants-search"
            className="box"
            placeholder="Search for restaurants"
            onFocus={this.getResList}
            onInput={this.getResList}
          />

          <FilteredRestaurants resdata={this.state.filteredResList} />

          {/* {this.render_restaurant(this.state.restaurantData)} */}
        </div>
      </div>
    );
  }

  //on page load we have to call api
  componentDidMount() {
    fetch(locationurl, { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        this.setState({ locationData: data });
      });
  }
}

export default Search;
