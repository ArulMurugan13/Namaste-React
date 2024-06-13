import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [resMenu, setresMenu] = useState(null);
  console.log("From Res Menu");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9715987&lng=77.5945627&restaurantId=69354"
    );
    const json = await data.json();
    console.log(json);
    setresMenu(json);
  };

  if (!resMenu) {
    return <h1>Loading .......</h1>;
  }

  const { text } = resMenu?.data?.cards[0]?.card?.card;

  return (
    <div>
      <h1>{text}</h1>
      <h3>20% Off</h3>
    </div>
  );
};

export default RestaurantMenu;
