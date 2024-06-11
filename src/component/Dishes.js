
import { useEffect, useState } from "react";
import { BANGALORE } from "../utils/constants";

const  Dishes = ()=>{

    const[listOfDishes , setListOfDishes] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async ()=>{
        const data = await fetch(BANGALORE);
        const json = await data.json();
        setListOfDishes(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
    }


    return (
      <div>
        <div>
          <h1>Whats On Mind</h1>
        </div>
        <div className="flex overflow-auto no-scrollbar">
            {
                listOfDishes.map((dish) =>{
                    
                   return (
                     <img
                       className="w-36 h-[180px]"
                       key={dish.imageId}
                       src={
                         "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_288,h_360/" +
                         dish.imageId
                       }
                     />
                   );
                })
            }
          
        </div>
      </div>
    );
}

export default Dishes;