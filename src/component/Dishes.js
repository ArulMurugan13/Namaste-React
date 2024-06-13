
import { useEffect, useState } from "react";
import { BANGALORE } from "../utils/constants";
import useApiData from "../utils/useApiData";

const  Dishes = ()=>{

    const[listOfDishes , setListOfDishes] = useState([]);
    const resData = useApiData();
    useEffect(()=>{
        if(resData?.data?.cards[0]?.card?.card?.imageGridCards?.info)
          {
            setListOfDishes(
              resData.data.cards[0].card.card.imageGridCards.info
            );
          }
    },[resData])

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