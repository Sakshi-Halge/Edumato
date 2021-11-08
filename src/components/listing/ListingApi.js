import React, { Component } from 'react';
import axios from 'axios';
import ListingDisplay from './ListingDisplay'

const meal_url =
  "https://edumatoapifordev.herokuapp.com/restaurants?mealtype_id=";


class ListingApi extends Component {
    constructor(props) {
        super()

        this.state = {
            restaurantsList: ''
        }
    }


    render(){
        return (
          <ListingDisplay
            res_list={this.state.restaurantsList}
            mealId={this.props.match.params.mealId}
          />
        );
    }

    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId', mealId);
        axios.get(`${meal_url}${mealId}`)
        .then((res) => {
            this.setState({ restaurantsList: res.data });
        })
    }
}


export default ListingApi;