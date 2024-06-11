import { useEffect, useState } from "react";
import { BANGALORE } from "../utils/constants";
import ResCard from "../shared/ResCard";

const RestaurantContainer = ()=>{

    const[listOfRestaurants , setListOfRestaurants] = useState([]);

    useEffect(()=>{
        fetchData();
    },[]);

    const fetchData = async ()=>{
        const data = await fetch(BANGALORE);
        const json = await data.json();

        console.log(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );

        setListOfRestaurants(
          json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants
        );
    }

    return (
        
        <div className=" grid grid-cols-4 gap-8 ">
            {
                
                listOfRestaurants.map((res)=>{
                    return <ResCard  key={res.info.id} resData={res}/>;
                })
            }
        </div>
    );
}

export default RestaurantContainer;