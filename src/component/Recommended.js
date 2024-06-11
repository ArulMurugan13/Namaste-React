import { useState, useEffect } from "react";
import useApiData from "../utils/useApiData";
import ResCard from "../shared/ResCard";

const Recommended = () => {
  const [recomRes, setrecomRes] = useState([]);
  const resData = useApiData();
  
  useEffect(() => {
    if (
      resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants
    ) {
      setrecomRes(
        resData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
    }
  }, [resData]);

  return (
    <div className="w-full px-5" >
      <div className="mb-5">
        <h1>Recommended</h1>
      </div>
      <div className=" flex overflow-auto no-scrollbar gap-5">
        {recomRes.map((res) => {
          return <ResCard key={res.info.id} resData={res} />;
        })}
      </div>
    </div>
  );
};

export default Recommended;
