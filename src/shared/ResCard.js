import { RES_IMAGE } from "../utils/constants";

const ResCard = ({resData}) => {
  // const { resData } = props;
  const { name, cloudinaryImageId, avgRatingString, cuisines } = resData?.info;
  const { slaString} =resData?.info?.sla;

  return (
    <div className="min-w-[278px] h-auto  hover: transform hover:scale-90 transition duration-300 ease-in-out">
      <div className="">
        <img
          className="w-[278px] h-[182px] rounded-3xl object-cover"
          src={RES_IMAGE + cloudinaryImageId}
        />
        <h2 className="text-xl">{name}</h2>
        <h2>
          {avgRatingString + " Stars "}
          {slaString}
        </h2>
        <p className="text-slate-500 overflow-auto no-scrollbar">{cuisines.join(",")}</p>
      </div>
    </div>
  );
};

export default ResCard;
