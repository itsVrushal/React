import { CDN_URL } from "../utils/constants";
export const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;
  const { deliveryTime } = resData?.info?.sla;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="title-text">{name}</h3>
      <h4 className="cuisine-text">{cuisines.join(", ")}</h4>
      <div className="head">
        <h4 id="rating">{avgRating}</h4>

        <h4> {costForTwo}</h4>
        <h4>Delivery Time: {deliveryTime} </h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
