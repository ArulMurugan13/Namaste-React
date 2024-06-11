import { Divider } from "../shared/Divider";
import Dishes from "./Dishes";
import Recommended from "./Recommended";
import RestaurantContainer from "./RestaurantContainer";

const Body = () => {
  return (
    <div className="p-6">
      <Dishes />
      <Divider />
      <Recommended />
      <Divider />
      <RestaurantContainer />
    </div>
  );
};

export default Body;
