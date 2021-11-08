import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ListingApi from './components/listing/ListingApi'
import Home from './components/Home'
import RestaurantDetails from './components/details/RestaurantDetails'


const Routing = () => {
    return(
        <BrowserRouter>
            <Route exact path="/" component={Home} />
            <Route path="/list/:mealId" component={ListingApi} />
            <Route path="/details/:res_id" component={RestaurantDetails} />
        </BrowserRouter>
    )
}


export default Routing;