import React from "react";
import './Search.css';

const FilteredRestaurants = (props) => {

   const listRes = [] 
   for(let i = 0; i < props.resdata.length; i++){
       listRes.push(
         <div className="res-box">
           <div
             className="img-box"
             style={{
               backgroundImage:
                 "url(" + props.resdata[i].image_gallery[1] + ")",
             }}
           ></div>
           <div className="res-info">
             <h2 className="res-name">{props.resdata[i].restaurant_name}</h2>
             <h4 className="res-add">{props.resdata[i].address}</h4>
           </div>
         </div>
       );
   }


    return (
      <div className="restaurant-div">
        {listRes}
      </div>
    );
};

export default FilteredRestaurants;
